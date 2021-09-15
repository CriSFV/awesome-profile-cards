'use strict';

//llamamos a los inputs del formulario y a los campos a rellenar de la preview card:
const previewName = document.querySelector('.js_previewName');
const previewDescription = document.querySelector('.js_previewDescription');
const previewEmail = document.querySelector('.js_previewEmail');
const previewPhone = document.querySelector('.js_previewPhone');
const previewLinkedin = document.querySelector('.js_previewLinkedin');
const previewGithub = document.querySelector('.js_previewGithub');
const allImputs = document.querySelectorAll('.js_allInputs');

//llamamos al botón de reset:
const resetButton = document.querySelector('.js_resetButton');

//llamamos al form:
const form = document.querySelector('.js_form');

//creamos un objeto vacío con los inputs del form:

let data = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
};

//llenamos la tarjeta con los datos de los inputs-enlaces:
function fillCard(data) {
  if (data.name !== '' || data.job !== '') {
    previewName.innerHTML = data.name;
    previewDescription.innerHTML = data.job;
    previewPhone.href = 'phone:' + data.phone;
    previewEmail.setAttribute('href', 'mailto:' + data.email);
    previewLinkedin.setAttribute('href', data.linkedin);
    previewGithub.setAttribute('href', 'https://github.com/' + data.github);
  } else {
    previewName.innerHTML = 'Nombre Apellidos';
    previewDescription.innerHTML = 'Descripción';
    previewPhone.href = '#';
    previewEmail.setAttribute('href', '#');
    previewLinkedin.setAttribute('href', '#');
    previewGithub.setAttribute('href', '#');
    for (const eachImput of allImputs) {
      eachImput.value = '';
    }
  }
}
function setInLocalStorage() {
  const stringDataUser = JSON.stringify(data);
  localStorage.setItem('dataUser', stringDataUser);
}
function getLocalStorage() {
  const localStorageData = localStorage.getItem('dataUser');
  if (localStorageData === null) {
    handleFillData();
  }
}

//creamos la función manejardora del evento, donde rellena el objeto:
function handleFillData(ev) {
  ev.preventDefault();
  if (ev.target.name === 'palette') {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;
    data[inputName] = inputValue;
  } else {
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    data[inputId] = inputValue;
  }
  console.log(data);
  setInLocalStorage();
  fillCard(data);
  //applyColor(data);
}

//creamos el evento de escucha sobre el formulario:
form.addEventListener('change', handleFillData);
getLocalStorage();

function handleResetBtn() {
  data = {
    palette: '',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
  };
  fillCard(data);
  console.log(data);
}
resetButton.addEventListener('click', handleResetBtn);
