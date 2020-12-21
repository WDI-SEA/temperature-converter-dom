document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM has been loaded!!!')
    document.getElementById('submit').addEventListener('click', (e)=> convert(e))

    // when clear is clicked it 
    // document.querySelector('#clear') 

    // made a variable for the top box where you put the number you want to convert
    let tempInput = document.getElementById('tempInput')


    // made a variable for the red box called 'finalResults
    let finalResult = document.getElementById('finalDisplay')

    function convert(e) {
        e.preventDefault()
        
    }
    // when submit is clicked it rins function convert


})

