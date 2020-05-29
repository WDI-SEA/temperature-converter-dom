
function convert() {
    let input = document.getElementById('temp').value;
    console.log(input)
    let fahrenheit = Math.round((input * (9/5)) + 32);
    console.log(fahrenheit);
    return  display(fahrenheit);
    
    
}

function display(){
    let input = document.getElementById('temp').value;
    let fahrenheit = Math.round((input * (9/5)) + 32)
    let listItem = document.createElement('li');
    listItem.textContent = `is ${fahrenheit} degrees fahrenheit`;
    document.getElementById('history').prepend(listItem)
}

function removeList(){
    var itemToRemove = document.getElementById('history');
    itemToRemove.parentNode.removeChild(itemToRemove);
}

document.getElementById("clear").addEventListener ("click", ()=> removeList())
document.getElementById("submit").addEventListener ("click", ()=> convert());




