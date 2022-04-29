let tempInputVar = document.getElementById("tempInput").value;
let tempOutputVar = document.getElementById("tempOutput").innerText;

document.getElementById("submitBtn").addEventListener("click", function () {
  let tempInputVar = document.getElementById("tempInput").value;
  if (document.getElementById("farenBtn").checked) {
    tempInputVar = ((tempInputVar - 32) * 5) / 9;
  } else if (document.getElementById("celBtn").checked) {
    tempInputVar = (tempInputVar * 9) / 5 + 32;
  }

  document.getElementById("tempOutput").innerText = tempInputVar;
});

document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("farenBtn").checked = false;
  document.getElementById("celBtn").checked = false;
  document.getElementById("tempInput").value = "";
  document.getElementById("tempOutput").innerText = "Your temp here";
});
