'use strict';
const allTitle = document.querySelectorAll('.js_collapsable');
const allSection = document.querySelectorAll('.js_section');
const allArrows = document.querySelectorAll('.js_iconEnd');

function arrowReverse(ev) {
  const titleElement = ev.currentTarget;
  const arrowElement = titleElement.querySelector('.js_iconEnd');
  if (!arrowElement.classList.contains('arrowReverse')) {
    arrowElement.classList.add('arrowReverse');
  } else {
    arrowElement.classList.remove('arrowReverse');
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
