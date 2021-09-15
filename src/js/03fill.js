//llamamos a los inputs del formulario y a los campos a rellenar de la preview card:
const previewName = document.querySelector('.js_previewName');
const previewDescription = document.querySelector('.js_previewDescription');
const previewEmail = document.querySelector('.js_previewEmail');
const previewPhone = document.querySelector('.js_previewPhone');
const previewLinkedin = document.querySelector('.js_previewLinkedin');
const previewGithub = document.querySelector('.js_previewGithub');
const allImputs = document.querySelectorAll('.js_allInputs');

// //llamamos al botón de reset:
const resetButton = document.querySelector('.js_resetButton');

// //llamamos al form:
const form = document.querySelector('.js_form');

// //creamos un objeto vacío con los inputs del form:

let data = {
  palette: '1',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
};

// //llenamos la tarjeta con los datos de los inputs-enlaces:
function fillCard(data) {
  const palette = parseInt(data.palette);
  if (data.name !== '' || data.job !== '') {
    if (palette === 1) {
      paintDefault();
    } else if (palette === 2) {
      paintRed();
    } else {
      paintYellow();
    }
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
    if (palette === 1 || palette === '') {
      paintDefault();
    } else if (palette === 2) {
      paintRed();
    } else {
      paintYellow();
    }
    for (const eachImput of allImputs) {
      eachImput.value = '';
    }
  }
}
function setInLocalStorage() {
  const stringDataUser = JSON.stringify(data);
  localStorage.setItem('dataUser', stringDataUser);
}
// function getLocalStorage() {
//   const localStorageData = localStorage.getItem('dataUser');
//   data = JSON.parse(localStorageData);
//   //fillCard(data);
// }

// //creamos la función manejardora del evento, donde rellena el objeto:
function handleFillData(ev) {
  if (ev.target.name === 'palette') {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;
    data[inputName] = inputValue;
  } else {
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    data[inputId] = inputValue;
  }

  setInLocalStorage();
  fillCard(data);
}
console.log(data);
// //creamos el evento de escucha sobre el formulario:
form.addEventListener('change', handleFillData);

//getLocalStorage();

function handleResetBtn() {
  data = {
    palette: '',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  };
  console.log(data);
  localStorage.clear();
  location.reload(); // recargar la pagina
  fillCard(data);
}
resetButton.addEventListener('click', handleResetBtn);
//getLocalStorage();
