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
function handleClickCollapsable(ev) {
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
const inputName = document.querySelector('.js_inputName');
const inputJob = document.querySelector('.js_inputJob');
const previewDescription = document.querySelector('.js_previewDescription');
const emailInput = document.querySelector('.emailInput');
const previewEmail = document.querySelector ('.js_previewEmail');
const inputPhone = document.querySelector('.js_inputPhone');
const previewPhone = document.querySelector ('.js_previewPhone');

const resetButton = document.querySelector('.js_resetButton');

const form = document.querySelector ('.js_form');

//función para volcar nombre-apellido tarjeta previsualización:
//function handleAddInput() {
  //previewName.textContent = inputName.value;
  //previewDescription.textContent = inputJob.value;
  //previewEmail.href= emailInput.value;
//}
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
  console.log('estoy aqui');
  if(data.name !== ''){
    allInputs[0].innerHTML = data.name;
    previewName.innerHTML = data.name;
    console.log (data.name);
  }
  else if (data.job !== ''){
    allInputs[1].innerHTML = data.job;
    previewDescription.innerHTML = data.job;
    console.log(data.job);
  }
  else if(data.phone !== ''){
    allInputs[2].innerHTML = data.phone;
    previewPhone.href = data.phone;
  }
  else if(data.email !== ''){
    allInputs[3].innerHTML = data.email;
    previewEmail.href= 'mailto:' + data.email;
    console.log (previewEmail.href);
  }
  else if(data.linkedin !== ''){
    allInputs[4].innerHTML = data.linkedin;

  }
  else if(data.github !== ''){
    //let href= 'https://github.com/' + data.github ;
    //allInputs[5].setAttribute('.href', href );
  }

}

function handleFillData(ev) {
  ev.preventDefault();
  if(ev.target.name === 'palette'){
    const inputName = ev.target.name;
    const inputValue = ev.target.value;
    console.log(inputName, inputValue);
    data[inputName] = inputValue;
  }
  else{
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    console.log(inputId, inputValue);
    data[inputId] = inputValue;
  }

  console.log(data);
  fillCard(data);
  //applyColor(data);
}

form.addEventListener('keyup', handleFillData);

//función para resetear formulario:

function handleResetInput() {
  location.reload();
}

resetButton.addEventListener('click', handleResetInput);
