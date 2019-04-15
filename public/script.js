const form = document.getElementById('convertForm');
const result = document.getElementById('result');
const jsonResult = document.getElementById('jsonResult');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch('/api/convert?input=' + form.input.value)
    .then(result => result.json())
    .then(data => {
      result.textContent = '';
      jsonResult.textContent = '';
      if (data.error) {
        result.textContent = data.error;
      } else {
        result.textContent = data.returnNum + ' ' + data.returnUnit;
        jsonResult.textContent = JSON.stringify(data);
      }
    });
});
