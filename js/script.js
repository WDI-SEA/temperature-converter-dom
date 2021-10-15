//Convert button
const newTemp = () => {
    let text = document.getElementById("text-input").value
    const tempNum = parseFloat(text);
    const celsius = (5/9 * (tempNum-32))
    const fahr = ((tempNum * 9/5) + 32) 
    const newItem = document.createElement("h3")
    //is there a response
if (document.getElementById("text-input").value !== "") {
    //celsius or fahrenheit
    if(document.getElementById('f-radio').checked) {
      newItem.innerText = parseInt(celsius) + "° C"
      document.querySelector(".new-temp").appendChild(newItem)
      if (parseInt(celsius) < 12) {
        document.querySelector(".new-temp").style.backgroundColor = 'blue' 
        document.querySelector(".new-temp").style.color = 'white' 
        //console.log ("it is cold")
        } else if (parseInt(celsius) > 30) {
         document.querySelector(".new-temp").style.backgroundColor = 'red' 
         document.querySelector(".new-temp").style.color = 'white' 
        
         //console.log ("it is hot")
        } else {
          document.querySelector(".new-temp").style.backgroundColor = 'none' 
        }
    } else if (document.getElementById('c-radio').checked) {
        newItem.innerText = parseInt(fahr)  + "° F"
        document.querySelector(".new-temp").appendChild(newItem)
        if (parseInt(fahr) < 50) {
        document.querySelector(".new-temp").style.backgroundColor = 'blue'
        document.querySelector(".new-temp").style.color = 'white'  
        //console.log ("it is cold")
        } else if (parseInt(fahr) > 85) {
         document.querySelector(".new-temp").style.backgroundColor = 'red' 
         document.querySelector(".new-temp").style.color = 'white' 
         //console.log ("it is hot")
        } else {
          document.querySelector(".new-temp").style.backgroundColor = 'none' 
        }
      } 
    } else {
        alert("invalid response")
    }
}
document.getElementById("generate-text").addEventListener("click", newTemp)


//Clear radio button and text
const clearTemp = () => {
    document.getElementById("text-input").value = null
    document.getElementById('f-radio').checked = false
    document.getElementById('c-radio').checked = false
    document.querySelector(".new-temp").innerText = ""
    console.log("cleared")
}
document.getElementById("clear-text").addEventListener("click", clearTemp)