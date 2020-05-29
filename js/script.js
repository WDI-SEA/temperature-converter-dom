
var resultDiv = document.querySelector(".result")
var submit = document.getElementById('submitButton')
var clear = document.getElementsByClassName('clearButton')


submit.addEventListener('click', function(e) {
    var userTemp = (document.getElementById('userTemp').value)
    var celsius = ((userTemp - 32) * .5556)
    resultDiv.innerText = (celsius + " degrees celsius")
})

document.getElementsByClassName('clearButton').onclick = clearResults

function resetForm() {
    document.getElementById('userTemp').value = ('');
    resultDiv.innerText = ('');
}

resetForm ();
