const tempNum = document.getElementById('tempNum');
const f = document.getElementById('f');
const c = document.getElementById('c');
const error = document.getElementById('error');
const submit = document.getElementById('submit');
const clear = document.getElementById('clear');

Array.from(
  document.querySelectorAll('input[name="group-name"]:checked'),
  (input) => (input.checked = false),
);

const clearNum = () => {
  const output = document.getElementById('output');
  output.textContent = '';
  output.style.backgroundColor = '';
  const num = document.getElementById('tempNum');
  num.value = '';
};

const getTempNum = () => {
  let num = tempNum.value;
  if (num === '' || null) {
    const cardHeader = document.querySelector('.card--header');
    const error = document.createElement('div');
    error.classList.add('error');
    error.textContent = 'Please enter a valid number';
    cardHeader.appendChild(error);

    setTimeout(() => {
      cardHeader.removeChild(error);
    }, 3000);
  } else if (f.checked === true) {
    num = ((num - 32) * 5) / 9;
    const output = document.getElementById('output');
    const tempF = Math.round(num);
    output.style.backgroundColor = 'rgba(97, 93, 93, 0.2)';
    output.textContent = tempF + '\u2103';
  } else if (c.checked === true) {
    num = (num * 9) / 5 + 32;
    const output = document.getElementById('output');
    const tempC = Math.round(num);
    output.style.backgroundColor = 'rgba(97, 93, 93, 0.2)';
    output.textContent = tempC + '\u2109';
  }
};

submit.addEventListener('click', getTempNum);
clear.addEventListener('click', clearNum);

// clear.addEventListener('click', clearTempNum);
