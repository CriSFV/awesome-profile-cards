'use strict';
const coloursDesign = document.querySelectorAll('.js_design');
const checkBoxRed = document.querySelector('.js_designcolourred');
const checkBoxYellow = document.querySelector('.js_designcolouryellow');
const checkBoxDefault = document.querySelector('.js_designcolourdefault');

function paintRed() {
  for (const eachSection of coloursDesign) {
    eachSection.classList.remove('defaultpalette');
    eachSection.classList.remove('yellowpalette');
    eachSection.classList.add('redpalette');
  }
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
checkBoxYellow.addEventListener('click', paintYellow);
checkBoxDefault.addEventListener('click', paintDefault);
