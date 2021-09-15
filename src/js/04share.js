const createButton = document.querySelector('.js_shareButton');
const urlCard = document.querySelector('.js_urlCard');
const notCreated = document.querySelector('.js_notCreate');
const twitterBtn = document.querySelector('.js_twiterBtn');
let pepinoLink;
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
      pepinoLink = pepino.cardURL;
      if (pepino.success === true) {
        urlCard.innerHTML = `<a href="${pepino.cardURL}">Pincha aquí, ${data.name} <i class="far fa-smile-wink"></i> </a>`;
        twitterBtn.classList.remove('hidden');
        twitterBtn.innerHTML = `<a class= "twitter__link js_twitterLink" href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${pepinoLink}" target="_blank"><i class="fab fa-twitter"></i> Compartir en Twiter</a>`;
      } else {
        notCreated.innerHTML = 'No hemos podido crear la tarjeta';
        urlCard.innerHTML = `<i class="far fa-sad-tear"></i> Introduzca todos los campos obligatorios`;
      }
    });
}
function handleTwitter() {
  twitterBtn.href = `"https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${pepinoLink}"`;
}
twitterBtn.addEventListener('click', handleTwitter);

function handleCreateBtn(ev) {
  ev.preventDefault();
  createCard();

  document.querySelector('.js_createdCard').classList.remove('hidden');
}
createButton.addEventListener('click', handleCreateBtn);
