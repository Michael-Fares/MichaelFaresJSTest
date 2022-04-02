

export const CustomGrid = () => {
    const question = document.querySelector(".question-wrapper")
    for(let i = 0; i < 10; i++) {
        const button = document.createElement('button');
        button.classList.add('number-button')
        button.innerHTML = i;
        question.appendChild(button)
    }
}

