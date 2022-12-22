const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const formInputEmail = document.querySelector('.feedback-form input');
const formInputMessage = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

fillFormInputFromLocalStorage();
const inputData = {
  email: '',
  message: '',
};
function onInput() {
  inputData.email = formInputEmail.value;
  inputData.message = formInputMessage.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}

function onSubmit(evt) {
  evt.preventDefault();
  if (formInputEmail.value === '' || formInputMessage.value === '') {
    alert('to continue, plese, fill all the empty fields!');
    return;
  }
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
      formInputEmail.value = localStorageData.email;
    }
    if (localStorageData.message) {
      formInputMessage.value = localStorageData.message;
    }
  } catch (error) {
    error.name;
    error.message;
  }
}
