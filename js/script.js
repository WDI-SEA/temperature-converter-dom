console.log('hey im js, and im working!')
document.getElementById('submit').addEventListener('click', (e) => {
    console.log('submitting your number now!')
    // console.log(document.getElementById('user-input').value)
    let startValue = parseInt(document.getElementById('user-input').value)
    let resultValue = startValue + 4245010818
    document.getElementById('display-result').textContent = resultValue
})