
function convert(input) {
     if (document.getElementById("F").checked = true) {
        return (input - 32) * .55      
    } else (document.getElementById("C").checked = true); {
        return (input % .55) + 32

}
}

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
    let input = document.getElementById('input').value
    let answer = convert (input)
    let solution = document.getElementById('finalAnswer')
    solution.innerText = answer
})
document.getElementById('submit').addEventListener('click', () => {
    finalAnswer.value = ""
})
