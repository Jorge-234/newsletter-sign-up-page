const button = document.querySelector("#button");
const message = document.getElementById("msg");
const cardContainer = document.getElementById("card-container");
const container = document.getElementById("container");


button.addEventListener('click', function ( ) {
    const input = document.getElementById("inputed");
    inputValue = input.value;
    const answer = document.getElementById("answer")
    inputContent = input.textContent;
    
    if (!inputValue)  {
        cardContainer.style.display = `none`
        message.textContent = `valid email required`;
        input.style.border = `var(--tomato) solid 1px`;
        input.style.background = `var(--tomato-loo)`
    }else if (!inputValue.includes('@') || !inputValue.endsWith('.com')) {
        cardContainer.style.display = `none`
        message.textContent = `valid email required`;
        input.style.border = `var(--tomato) solid 1px`;
        input.style.background = `var(--tomato-loo)`
        inputValue.style.color = `var(--tomato)`;
    }else {
        cardContainer.style.display = `flex`
        container.style.display = `none`
        answer.textContent = `${inputValue}`
    }
} )
const defaultButton = document.getElementById("btn-finn")

defaultButton.addEventListener('click', function () {
       location.reload()
        
})