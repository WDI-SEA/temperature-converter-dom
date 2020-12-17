document.addEventListener('DOMContentLoaded', () => {
// if convert button clicks
    document.querySelector('form').addEventListener("click", (e) => {
    e.preventDefault();
    
        document.getElementById('clickA').onclick = 
        function conversionTemp() {
            var givenTemp = document.getElementById('submitTemp').value;
            if (document.getElementById('submitTempC').checked) {
            document.getElementById('answerNum').innerText = ((givenTemp * 9/5) + 32).toFixed(3);    
            } else {
            document.getElementById('answerNum').innerText = ((givenTemp - 32) * (5/9)).toFixed(3);  
            }
        }   
    })
// if clear button clicks
    document.getElementById('clickB').addEventListener('click', (e) => {
        document.getElementById('submitTemp').value = "";
    })

})





