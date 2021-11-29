'use strict';
const createButton = document.querySelector('.js_shareButton');
const urlCard = document.querySelector('.js_urlCard');
const notCreated = document.querySelector('.js_notCreate');
const twitterBtn = document.querySelector('.js_twiterBtn');
let responseLink;
function createCard() {
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => {
      responseLink = response.cardURL;
      if (response.success === true) {
        notCreated.classList.remove('hidden');
        notCreated.innerHTML = 'Tu tarjeta ha sido creada';
        urlCard.innerHTML = `<a href="${response.cardURL}">Pincha aquí, ${data.name} <i class="far fa-smile-wink"></i> </a>`;
        twitterBtn.classList.remove('hidden');
        twitterBtn.innerHTML = `<a class= "twitter__link js_twitterLink" href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${responseLink}" target="_blank"><i class="fab fa-twitter"></i> Compartir en Twiter</a>`;
      } else {
        notCreated.classList.remove('hidden');
        notCreated.innerHTML = 'No hemos podido crear la tarjeta';
        urlCard.innerHTML = `<i class="far fa-sad-tear"></i> Introduzca todos los campos obligatorios`;
      }
    });
}
function handleTwitter() {
  twitterBtn.href = `"https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${responseLink}"`;
}
twitterBtn.addEventListener('click', handleTwitter);

function handleCreateBtn(ev) {
  ev.preventDefault();
  createCard();

  document.querySelector('.js_createdCard').classList.remove('hidden');
}
createButton.addEventListener('click', handleCreateBtn);
