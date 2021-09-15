'use strict';
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
