'use strict';
const coloursDesign = document.querySelectorAll('.js_design');
const paintColor = document.querySelectorAll('.js_designColor');

function paintPreview(ev) {
  const paletteClicked = parseInt(ev.target.id);
  if (paletteClicked === 1) {
    paintDefault();
  } else if (paletteClicked === 2) {
    paintRed();
  } else {
    paintYellow();
  }
}
function paintRed() {
  for (const eachSection of paintColor) {
    eachSection.classList.remove('defaultpalette');
    eachSection.classList.remove('yellowpalette');
    eachSection.classList.add('redpalette');
  }
}

function paintYellow() {
  for (const eachSection of paintColor) {
    eachSection.classList.remove('defaultpalette');
    eachSection.classList.remove('redpalette');
    eachSection.classList.add('yellowpalette');
  }
}

function paintDefault() {
  for (const eachSection of paintColor) {
    eachSection.classList.remove('yellowpalette');
    eachSection.classList.remove('redpalette');
    eachSection.classList.add('defaultpalette');
  }
}

for (const eachinput of coloursDesign) {
  eachinput.addEventListener('click', paintPreview);
}
