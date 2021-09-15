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
