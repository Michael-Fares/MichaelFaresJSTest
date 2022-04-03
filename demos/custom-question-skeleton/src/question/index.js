import { PREFIX } from './constants';
import { createCustomGrid }  from './components/createCustomGrid';
// import custom styles for the custom question
import '../styles.css'


export default class Question {
    constructor(init, lrnUtils) {
        this.init = init;
        this.events = init.events;
        this.lrnUtils = lrnUtils;
        this.el = init.$el.get(0);

        this.render().then(() =>{
            this.registerPublicMethods();
            this.handleEvents();

            if (init.state === 'review') {
                init.getFacade().disable();
            }

            init.events.trigger('ready');
        });
    }

    render() {
        const { el, init, lrnUtils } = this;
        const { question, response } = init;
        console.log('init', init)
        

        // TODO: Requires implementation

        el.innerHTML = `
            <div class="${PREFIX} lrn-response-validation-wrapper">
                <div class="lrn_response_input"> 
                    <div class="question-wrapper"></div>
                </div>            
                <div class="${PREFIX}-checkAnswer-wrapper"></div>
                <div class="${PREFIX}-suggestedAnswers-wrapper"></div>
            </div>
        `;

        // Optional - Render optional Learnosity components like Check Answer Button, Suggested Answers List
        // first before rendering your question's components
        return Promise.all([
            lrnUtils.renderComponent('SuggestedAnswersList', el.querySelector(`.${PREFIX}-suggestedAnswers-wrapper`)),
            lrnUtils.renderComponent('CheckAnswerButton', el.querySelector(`.${PREFIX}-checkAnswer-wrapper`))
        ]).then(([suggestedAnswersList]) => {
            this.suggestedAnswersList = suggestedAnswersList;
            // calling my createCustomGrid function which renders out the UI custom question with VanillaJS
            createCustomGrid()
           
        });
    }

    /**
     * Add public methods to the created question instance that is accessible during runtime
     *
     * Example: questionsApp.question('my-custom-question-response-id').myNewMethod();
     */
    registerPublicMethods() {
        const { init } = this;
        // Attach the methods you want on this object
        const facade = init.getFacade();

        facade.disable = () => {
            this.disabled = true
        };
        facade.enable = () => {
            this.disabled = false
        };
    }

    handleEvents() {
        const { el, events } = this;
        
        let responses = {
            "hundreds": null,
            "tens": null,
            "ones": null,   
        }

        // make and HTML collection of all buttons
        const buttons = el.querySelectorAll('.number-button')
        // add a click event lister to each button to turn it blue when selected, and 
        // to populate the top row with the number selected
        // and to to update the responses as the saved responses object 
        Array.from(buttons).forEach(button => {
            button.addEventListener('click', () => {

                // if there is a button already selected in the column
                // then deselect it before selecting the button just clicked
                const otherButtons = button.parentNode.children
                Array.from(otherButtons).forEach((button) => {
                    if(button.classList.contains('selected')) {
                        button.classList.remove('selected')
                    }
                })
                    // when the individual button is clicked, turn it blue and populate its corresponding top row
                    if(button.classList.contains('hundreds')) {
                        const hundredsPlace = document.querySelector('#hundreds')
                        hundredsPlace.innerHTML = button.innerHTML
                        responses["hundreds"] = Number(button.innerHTML)
                        button.classList.add('selected')
                    }
                    if(button.classList.contains('tens')) {
                        const tensPlace = document.querySelector('#tens')
                        tensPlace.innerHTML = button.innerHTML
                        responses["tens"] = Number(button.innerHTML)
                        button.classList.add('selected')
                    }
                    if(button.classList.contains('ones')) {
                        const onesPlace = document.querySelector('#ones')
                        onesPlace.innerHTML = button.innerHTML
                        responses["ones"] = Number(button.innerHTML)
                        button.classList.add('selected')
                    }
                })
        })
        
        
        // trigger a changed event to watch for the changing values of each digit place in responses object as user interacts with UI

       events.trigger('changed', responses);

       this.init.response = Object.values(responses).join("")

       console.log(this.init.response)

       


        // "validate" event can be triggered when Check Answer button is clicked or when public method .validate() is called
        // so developer needs to listen to this event to decide if he wants to display the correct answers to user or not
        // options.showCorrectAnswers will tell if correct answers for this question should be display or not.
        // The value showCorrectAnswers by default is the value of showCorrectAnswers inside initOptions object that is used
        // to initialize question app or the value of the options that is passed into public method validate (like question.validate({showCorrectAnswers: false}))
        events.on('validate', options => {
            console.log(responses)
        });
    }
}
