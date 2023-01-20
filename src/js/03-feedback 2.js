import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInp = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form texrarea');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

fillFormInputFromLocalStorage();
const inputData = {};
function onInput() {
  // inputData[evt.target.name] = evt.target.value;

  inputData.email = emailInp.value;
  inputData.message = textArea.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}

function onSubmit(evt) {
  evt.preventDefault();
  if (
    evt.currentTarget.elements.email.value === '' ||
    evt.currentTarget.elements.message.value === ''
  ) {
    alert('to continue, plese, fill all the empty fields!');
    return;
  }
  evt.currenTarget.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
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

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textArea: document.querySelector('.feedback-form textarea'),
//   inputMail: document.querySelector('.feedback-form input'),
// };
// const formData = {};

// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', throttle(onTextAreaInput, 500));

// populateTextArea();

// function onFormSubmit(e) {
//   e.preventDefault();
//   e.target.reset();
//   JSON.parse(localStorage.getItem(STORAGE_KEY));
//   localStorage.removeItem(STORAGE_KEY);
//   console.log(formData);
// }
// function onTextAreaInput() {
//   formData.email = refs.inputMail.value;
//   formData.message = refs.textArea.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }
// function populateTextArea() {
//   const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (savedMessage) {
//     refs.inputMail.value = savedMessage.email;
//     refs.textArea.value = savedMessage.message;
//   }
//   // console.log(savedMessage)
// }
