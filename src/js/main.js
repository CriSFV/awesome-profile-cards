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
const allSection = document.querySelectorAll('.js_section');
const allArrows = document.querySelectorAll('.js_iconEnd');

function arrowReverse(ev) {
  const titleElement = ev.currentTarget;
  const arrowElement = titleElement.querySelector('.js_iconEnd');
  if (!arrowElement.classList.contains('arrowReverse')) {
    arrowElement.classList.toggle('arrowReverse');
  }
}

function closeOpenCollapsables(ev) {
  const titleElement = ev.currentTarget;
  const childElement = titleElement.parentNode;
  const elementHidden = childElement.querySelector('.js_section');
  elementHidden.classList.toggle('hidden');
}

function startAgain() {
  for (const eachSection of allSection) {
    eachSection.classList.add('hidden');
  }
  for (const eachArrow of allArrows) {
    eachArrow.classList.remove('arrowReverse');
  }
}

function handleClickCollapsable(ev) {
  startAgain();
  arrowReverse(ev);
  closeOpenCollapsables(ev);
}

for (const eachTitle of allTitle) {
  eachTitle.addEventListener('click', handleClickCollapsable);
}

const fillName = document.querySelector('.js_fillSectionName');
const previewName = document.querySelector('.js_previewName');

fillName.addEventListener('keyup', (ev) => {
  let nameValue = ev.target.value;
  previewName.textContent = nameValue;
});
