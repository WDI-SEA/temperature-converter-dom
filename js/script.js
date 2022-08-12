// farienhietret to celsius
function fToC (f) {
    return (f -32) * 5 / 9
}

// farenithieth to kelvin
// cToK(fToC)

// celsius to farienthietetet
function cToF (c){
    return (c * 5 / 9) + 32
}

//celsius to kelvin
function cToK (c){
    return c + 273.15
}

//kelvin to celsius
function kToC (k) {
    return k - 273.15
}

//kelvin to farhiehitntet
// cToF(kToC)

let convert = document.getElementById('convert')
let clear = document.getElementById('clear')
let results = document.getElementById('result')

//checks which input then shows conversion
convert.addEventListener('click', function(e){
    if (document.getElementById('far').checked){
        let resultCel = fToC(document.getElementById('input').value)
        let resultKel = cToK(resultCel)
        results.innerText = `${resultCel}°C or ${resultKel}°K`
        results.style.display = 'block'
    } else if (document.getElementById('cel').checked){
        let resultFar = cToF(document.getElementById('input').value)
        let resultKel = cToK(document.getElementById('input').value)
        results.innerText = `${resultFar}°F or ${resultKel}°K`
        results.style.display = 'block'
    } else if (document.getElementById('kel').checked){
        let resultCel = kToC(document.getElementById('input').value)
        let resultFar = cToF(resultCel)
        results.innerText = `${resultFar}°F or ${resultCel}°C`
        results.style.display = 'block'
    }
})

//clears results
clear.addEventListener('click', function(e){
    document.getElementById('result').style.display = 'none'
})