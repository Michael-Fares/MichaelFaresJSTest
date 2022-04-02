

export const CustomGrid = () => {
    const question = document.querySelector(".lrn_response_input")
    for(let i = 0; i < 10; i++) {
        const button = document.createElement('button');
        button.innerHTML = i;
        question.appendChild(button)
    }
}