
document.getElementById('submit').addEventListener('click', (e) => {
  console.log(document.getElementById('entry').value);
});

document.getElementById('using').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('The form has been submitted');

});
