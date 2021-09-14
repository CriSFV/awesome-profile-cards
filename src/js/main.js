'use strict';

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e**/

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);

const allTitle = document.querySelectorAll('.js_collapsable');
const iconArrow = document.querySelectorAll('.js_iconEnd');
const allSections = document.querySelectorAll('.js_section');

function arrowReverse() {
  for (const arrow of iconArrow) {
    arrow.classList.toggle('arrowReverse');
  }
}

function closeOpenCollapsables() {
  for (const eachSection of allSections) {
    eachSection.classList.toggle('hidden');
  }
}
function handleClickCollapsable() {
  //const eventTarget = ev.target.id;
  arrowReverse();
  closeOpenCollapsables();
}

for (const eachTitle of allTitle) {
  eachTitle.addEventListener('click', handleClickCollapsable);
}

/*function handleClickCollapsable(){
  for(let index=0; index<allTitle.length; index++){
    const data = allTitle[index];
    const dataTarget= data.target;
    dataTarget.classList.add('arrowReverse');
    //if(data===allTitle.currentTarget){
    // arrowReverse();
    //closeOpenCollapsables();
    //}
    //console.log(data.target);
  }
}*/
const allInputs = document.querySelectorAll('.js_allInputs');
const previewName = document.querySelector('.js_previewName');
const previewDescription = document.querySelector('.js_previewDescription');
const previewEmail = document.querySelector ('.js_previewEmail');
const previewPhone = document.querySelector ('.js_previewPhone');
const previewLinkedin = document.querySelector('.js_previewLinkedin');
const resetButton = document.querySelector('.js_resetButton');
const previewGithub = document.querySelector ('.js_previewGithub');

const form = document.querySelector ('.js_form');


let data = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
// photo:'',
};

function fillCard(data){
  if(data.name !== ''){
    allInputs[0].innerHTML = data.name;
    previewName.innerHTML = data.name;
  }
  else if (data.job !== ''){
    allInputs[1].innerHTML = data.job;
    previewDescription.innerHTML = data.job;
  }
  else if(data.phone !== ''){
    allInputs[2].innerHTML = data.phone;
    previewPhone.href = data.phone;
  }
  else if(data.email !== ''){
    allInputs[3].innerHTML = data.email;
    previewEmail.setAttribute ('href', 'mailto:' + data.email);
  }
  else if(data.linkedin !== ''){
    allInputs[4].innerHTML = data.linkedin;
    previewLinkedin.href= data.linkedin;
  }
  else if(data.github !== ''){
    let href= 'https://github.com/' + data.github;
    allInputs[5].innerHTML = data.github;
    previewGithub.href = href;
  }

}

function handleFillData(ev) {
  ev.preventDefault();
  if(ev.target.name === 'palette'){
    const inputName = ev.target.name;
    const inputValue = ev.target.value;
    data[inputName] = inputValue;
  }
  else{
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    data[inputId] = inputValue;
  }

  fillCard(data);
  //applyColor(data);
}

form.addEventListener('keyup', handleFillData);

//función para resetear formulario:

function handleResetInput() {
  location.reload();
}

resetButton.addEventListener('click', handleResetInput);
