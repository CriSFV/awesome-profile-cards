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

function getImage(e){
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

function arrowReverse(){
  for(const arrow of iconArrow){
    arrow.classList.toggle('arrowReverse');
  }
}

function closeOpenCollapsables(){
  for(const eachSection of allSections){
    eachSection.classList.toggle('hidden');
  }
}
function handleClickCollapsable(ev){
  //const eventTarget = ev.target.id;
  arrowReverse();
  closeOpenCollapsables();
}

for(const eachTitle of allTitle) {
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

const previewName = document.querySelector ('.js_previewName');
const allInputs = document.querySelectorAll('.js_allInputs');
const previewDescription = document.querySelector ('.js_previewDescription');
const inputName = document.querySelector ('.js_inputName');
const previewEmail = document.querySelector ('.js_previewEmail');
const emailInput = document.querySelector('.emailInput');
const inputJob = document.querySelector('.js_inputJob');
//función para volcar nombre-apellido tarjeta previsualización:
function handleAddInput(){
  previewName.textContent = inputName.value;
  previewDescription.textContent = inputJob.value;
}

for (const eachInput of allInputs) {
  eachInput.addEventListener('keyup',handleAddInput);
}
//función para resetear formulario:
/*function handleAddInput(){}

for (const eachInput of allInputs) {
  eachInput.addEventListener('keyup',handleResetInput);
}*/