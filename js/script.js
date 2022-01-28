document.querySelector('#submit-button').addEventListener('click', function(){
    // console.log('button test')
    const tempInputValue = document.querySelector('#temp-input').valueAsNumber
    //creates an input var that is linked to inputID in html
    const result = document.querySelector('#result')

    result.innerText = (tempInputValue - 32) * (5/9)
})



// function getInput() {
//     var x = document.getElementById("degreesFahrenheit").value;
//     document.getElementById
// }

// let tempFahrenheight = 90

// let tempCelsius = (tempFahrenheight - 32) / 1.8
// console.log(tempFahrenheight + " degrees Farenheit is " + tempCelsius + " degrees celsius")





// let testing = 'test'
// document.getElementById('results').innerText = testing