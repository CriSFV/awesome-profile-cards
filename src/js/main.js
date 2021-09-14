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

const fillName = document.querySelector('.js_fillSectionName');
const previewName = document.querySelector('.js_previewName');

fillName.addEventListener('keyup', (ev) => {
  let nameValue = ev.target.value;
  previewName.textContent = nameValue;
});

/*aquí empieza el share*/
const createButton = document.querySelector('.js_shareButton');

//function createCard() {
// console.log('ahora hacemos petición a la api');
// fetch(
//   'https://awesome-profile-cards.herokuapp.com/card' /*{
//     method:'POST',
//     body: JSON.stringify(nombreObjetoConLosDatosValue),
//   headers:{
//sandra: he puesto content en may
//     'Content-Type':'application/json'
//   }
// }*/
// )
// .then((response)=>response.json())
// .then((data)=>{
//sandra: he quitado comillas de data
//   console.log(data);
//sandra: ese console.log nos da un array con 2 atrib: cardURL y success: true. si copiamos el contenido del atrib cardURL y lo pegamos al navegador nos redirecciona a la tarjeta del usuario, con enlaces funcionando, foto, todo.
//   console.log('decidir que hacer con los datos: pintar url en el html');
// ejecutar una función: si success === true (sandra: o si data.cardURL === true) la pinto (sandra: la pinto en cardResultElement.innerHTML = data.cardURL) y pinto el botton de twiter. Si genero la tarjeta con false (else), da error y pinta undefined (sandra: podemos añadir un mensaje para el usuario que diga "rellena los campos requeridos")
// })
//}

function handleCreateBtn(ev) {
  ev.preventDefault(); // esto hay que quitarlo cuando salga la tarjeta
  // hacer la petición al fetch enviando datos: createCard();
  document.querySelector('.js_createdCard').classList.remove('hidden');
}
createButton.addEventListener('click', handleCreateBtn);
