// console.log('js is linked!')

// callback

// js has 'first class functions'
// a function can be anything in javascript

// creating named functions
function myNamedFunction() {}

//assigning a anonymous function to a variable
const myAnonFunction = function() {}
// anonymous arrow functions
const myArrow = () => {}

// first class functions can be passed to other functions as arguments
// addEventListener os a 'higher order function'
// Element.addEventListener('click', function(e) {}) // example of a 'callback function' 
// 'higher order function' takes another function as an argument

// callback (func) a function that is passed as an argument to another function 

// DIY higher order function 
function higherOrder(callbackFunc){
    // since this a higher order function, it will invoke the callback
    callbackFunc()
}

// defining a named callback function 
function myCallback() {
    console.log('the callback has been invoked!')

}
higherOrder(myCallback)

higherOrder(function() {
    // inside the anonymous function
    console.log('hello from the anonymous callback!')
})


// callback calculator
//higher order function 
function doCalculation (numOne, numTwo, callbackMath) {
    return callbackMath(numOne, numTwo)
    }

// callback for adding 
function add(firstNum, secondNum) {
    return firstNum + secondNum
}
// console.log(add (10, 15))

let result = doCalculation(43, 7, add)
console.log(result)
result = doCalculation(10, 5, function(numOne, numTwo){
    return numOne - numTwo
})
console.log(result)

// timing functions

// (these are higher order functions)

// setInterval -- executes a callback function at a specified interval 
function tick(){
    console.log ('tick')
}
// setInterval to invoke, time in milliseconds to invoke it
setInterval(tick, 1000)