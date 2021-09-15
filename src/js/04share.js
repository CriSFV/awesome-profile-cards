'use strict';
/*aquí empieza el share*/
const createButton = document.querySelector('.js_shareButton');
const urlCard = document.querySelector('.js_urlCard');
const notCreated = document.querySelector('.js_notCreate');
function createCard() {
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((pepino) => {
      console.log(pepino);
      if (pepino.success === true) {
        urlCard.innerHTML = `<a href="${pepino.cardURL}">Pincha aquí, ${data.name} <i class="far fa-smile-wink"></i> </a>`;
      } else {
        notCreated.innerHTML = 'No hemos podido crear la tarjeta';
        urlCard.innerHTML = `<i class="far fa-sad-tear"></i> Introduzca todos los campos obligatorios`;
      }
    });
}
// sandra: ese console.log nos da un array con 2 atrib: cardURL y success: true. si copiamos el contenido del atrib cardURL y lo pegamos al navegador nos redirecciona a la tarjeta del usuario, con enlaces funcionando, foto, todo.
//   console.log('decidir que hacer con los datos: pintar url en el html');
// ejecutar una función: si success === true (sandra: o si data.cardURL === true) la pinto (sandra: la pinto en cardResultElement.innerHTML = data.cardURL) y pinto el botton de twiter. Si genero la tarjeta con false (else), da error y pinta undefined (sandra: podemos añadir un mensaje para el usuario que diga "rellena los campos requeridos")
// })

function handleCreateBtn(ev) {
  ev.preventDefault();
  createCard();

  document.querySelector('.js_createdCard').classList.remove('hidden');
}
createButton.addEventListener('click', handleCreateBtn);
