
export const createCustomGrid = () => {
    // get the question wrapper div placed at the center of the markup in question/index.js
    const question = document.querySelector('.question-wrapper');

     // create a 3 column grid layout via a div wrapper, and place it in the question wrapper
     const grid = document.createElement('div')
     grid.classList.add('grid-columns')
     question.appendChild(grid)

    // add 3 columns to the grid based on the digit placeholders for 3 digits
    const digits = ['hundreds', 'tens', 'ones']

    for(let i = 0; i < digits.length; i++) {
        const digit = digits[i]
        // create a column div for each digit placeholder
        const column = document.createElement('div')
        // set each column to display as a flex-column through css class
        column.classList.add('flex-column')
        // give each colunn a class name based on its placeholder digit
        column.classList.add(digit)
        // place an article element at the top of each column which will display the digit selected by the button
        const digitDisplay = document.createElement('article')
        // give all 3 article elements a class of digit-display
        digitDisplay.classList.add('digit-display')
        // give each of the 3 article elements a unique id names for its digit placeholder.
        digitDisplay.setAttribute('id', digit)
        // finish appending to the DOM
        column.appendChild(digitDisplay)
        grid.appendChild(column)
    }

    // create an HTML collection of the 3 columns
    const columns = document.getElementsByClassName('flex-column')
    // loop over the collection 
    for(let i = 0; i < columns.length; i++) {
        const column = columns[i]
        // for each column, inset 10 buttons using a loop
        for(let j = 0; j < 10; j++) {
            const button = document.createElement('button')
            button.classList.add(j, 'number-button')
            button.innerHTML = j
            column.appendChild(button)
        }
    }
}

