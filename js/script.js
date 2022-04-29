// const far = 
// function calculateToCel(event){
//     userInput − 32) × 5/9
// }
// function calculateToFar(){
//     userInput × 9/5) + 3
// }
document.addEventListener('DOMContentLoaded',function(){
    const userInput = document.querySelector('#user-input')
    const radioButtons = document.querySelectorAll('input[name="temperature"]')
    document.querySelector('#submit').addEventListener('click', function(){
        const inputSpan = document.querySelector('#inputSpan')
        // inputSpan.innerText = `User input is ${userInput.value}! I don't know how to do the radio button`   
            
            let calculationForC = (userInput.value - 32) * (5/9)
            let calculationForF = userInput.value*(9/5) + 32
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    // selectedTemp = radioButton.value;
                    inputSpan.innerText = `${calculationForF} °F`
                

       }else{
        inputSpan.innerText = `${calculationForC} °C`
       } console.log(radioButton)
       
       
    }
})
    document.querySelector('.clear').addEventListener('click', function(){
        userInput.value = ''
    })
})
