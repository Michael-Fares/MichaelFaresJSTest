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

        // adding a div custom question wrapper element in which to render the custom grid component UI
        // rendered by calling createCustomGrid() on line 50
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
            // implemeneted as in the 'box-and-whisker' example
            this.disabled = true
        };
        facade.enable = () => {
             // implemeneted as in the 'box-and-whisker' example
            this.disabled = false
        };
    }

    handleEvents() {
        const { el, events, init } = this;
        
        let responses = {
            "hundreds": null,
            "tens": null,
            "ones": null,   
        }

        // make and HTML collection of all buttons
        const buttons = el.querySelectorAll('.number-button')
        // add a click event lister to each button to turn it blue when selected, and 
        // to populate the top row with the number selected
        // and to update the responses as the saved responses object watched by the 'changed' event triger on line 122
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

        // "validate" event can be triggered when Check Answer button is clicked or when public method .validate() is called
        // so developer needs to listen to this event to decide if he wants to display the correct answers to user or not
        // options.showCorrectAnswers will tell if correct answers for this question should be display or not.
        // The value showCorrectAnswers by default is the value of showCorrectAnswers inside initOptions object that is used
        // to initialize question app or the value of the options that is passed into public method validate (like question.validate({showCorrectAnswers: false}))
        events.on('validate', options => {
            // piece of UI to change, which is the 
            // 3 article element digit placeholders at the top of each column (top row)
            const answerField = el.querySelectorAll('.digit-display')
            // get the written feedback display in order to show custom written feeback to user
            // in addition to UI color changes
            const writtenFeedback = document.querySelector('.feedback')
            // get the boolean value of whether or not the submitted answer matched the correct answer
            const result = init.getFacade().isValid()
            
            // if the result is correct (value of result === true) then toggle the correct response classname
            // to turn the top row green
            // and provide the appropriate written feedback to user ("Correct!")
            if(result) {
                Array.from(answerField).forEach(element => {
                    if(element.classList.contains('incorrect-response')) {
                        element.classList.remove('incorrect-response')
                    }
                    element.classList.add('correct-response')
                })
                writtenFeedback.innerHTML = 'Correct!'
                writtenFeedback.style.color = 'green'
            } else {
                Array.from(answerField).forEach(element => {
                    element.classList.add('incorrect-response')
                    // if the user tries to enter the same incorrect response
                    // or a different incorrect response,
                    // then make the UI top row flash red
                    // to show that the answer is still incorrect
                    element.classList.add('flash')
                    setTimeout(() => {
                        element.classList.remove('flash')
                    }, 500)
                // provide and style the appropriate written feedback to user e.g "Incorrect answer ..."
                writtenFeedback.innerHTML = 'Incorrect answer. Please try again.'
                writtenFeedback.style.color = 'tomato'
                    
                }) 
            }
        });
    }
}
