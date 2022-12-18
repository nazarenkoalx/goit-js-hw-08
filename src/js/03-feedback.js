const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

fillFormInputFromLocalStorage();
const inputData = {};
function onInput(evt) {
  inputData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}

function onSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
}

function fillFormInputFromLocalStorage() {
  try {
    const localStorageData = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (localStorageData.email) {
      form.elements.email.value = localStorageData.email;
    }
    if (localStorageData.message) {
      form.elements.message.value = localStorageData.message;
    }
  } catch (error) {
    error.name;
    error.message;
  }
}
