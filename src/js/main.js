'use strict';

// const fr = new FileReader();
// const fileField = document.querySelector('.js__profile-upload-btn');
// const profileImage = document.querySelector('.js__profile-image');
// const profilePreview = document.querySelector('.js__profile-preview');

// /**
//  * Recoge el archivo añadido al campo de tipo "file"
//  * y lo carga en nuestro objeto FileReader para que
//  * lo convierta a algo con lo que podamos trabajar.
//  * Añade un listener al FR para que ejecute una función
//  * al tener los datos listos
//  * @param {evento} e**/

// function getImage(e) {
//   const myFile = e.currentTarget.files[0];
//   fr.addEventListener('load', writeImage);
//   fr.readAsDataURL(myFile);
// }

// /**
//  * Una vez tenemos los datos listos en el FR podemos
//  * trabajar con ellos ;)
//  */
// function writeImage() {
//   /* En la propiedad `result` de nuestro FR se almacena
//    * el resultado. Ese resultado de procesar el fichero que hemos cargado
//    * podemos pasarlo como background a la imagen de perfil y a la vista previa
//    * de nuestro componente.
//    */
//   profileImage.style.backgroundImage = `url(${fr.result})`;
//   profilePreview.style.backgroundImage = `url(${fr.result})`;
// }

// /**
//  * Genera un click automático en nuesto campo de tipo "file"
//  * que está oculto
//  */

// /**
//  * Añadimos los listeners necesarios:
//  * - al botón visible para generar el click automático
//  * - al campo oculto para cuando cambie su value
//  */
// fileField.addEventListener('change', getImage);

// const allTitle = document.querySelectorAll('.js_collapsable');
// const iconArrow = document.querySelectorAll('.js_iconEnd');
// const allSections = document.querySelectorAll('.js_section');

// function arrowReverse() {
//   for (const arrow of iconArrow) {
//     arrow.classList.toggle('arrowReverse');
//   }
// }

// function closeOpenCollapsables() {
//   for (const eachSection of allSections) {
//     eachSection.classList.toggle('hidden');
//   }
// }
// function handleClickCollapsable(ev) {
//   //const eventTarget = ev.target.id;
//   arrowReverse();
//   closeOpenCollapsables();
// }

// for (const eachTitle of allTitle) {
//   eachTitle.addEventListener('click', handleClickCollapsable);
// }

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
// const fillName = document.querySelector('.js_fillSectionName');
// const previewName = document.querySelector('.js_previewName');

// fillName.addEventListener('keyup', (ev) => {
//   let nameValue = ev.target.value;
//   previewName.textContent = nameValue;
// });

// JS DE LA PREVIEW PARTE DESIGN
const coloursDesign = document.querySelectorAll('.js_design');
const checkBoxRed = document.querySelector('.js_designcolourred');
const checkBoxYellow = document.querySelector('.js_designcolouryellow');
const checkBoxDefault = document.querySelector('.js_designcolourdefault');

function paintRed() {
  for (const eachSection of coloursDesign) {
    eachSection.classList.remove('defaultpalette');
    eachSection.classList.remove('yellowpalette');
    eachSection.classList.add('redpalette');
    // const exit = eachSection.classList.replace(eachSection.classList.value ,'redpalette');
    // if(!exit) console.log('errroooooooor');
  }
  console.log(paintRed);
}

function paintYellow() {
  for (const eachSection of coloursDesign) {
    eachSection.classList.remove('defaultpalette');
    eachSection.classList.remove('redpalette');
    eachSection.classList.add('yellowpalette');
  }
}

function paintDefault() {
  for (const eachSection of coloursDesign) {
    eachSection.classList.remove('yellowpalette');
    eachSection.classList.remove('redpalette');
    eachSection.classList.add('defaultpalette');
  }
}

checkBoxRed.addEventListener('click', paintRed);
console.log(checkBoxRed);
checkBoxYellow.addEventListener('click', paintYellow);
console.log(checkBoxYellow);
checkBoxDefault.addEventListener('click', paintDefault);
