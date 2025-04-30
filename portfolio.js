const text = [
  'Developer',
  'Designer',
  'S/w Engineer',
]

let speed = 100;
const textElement = document.querySelector('.typewritter-text')
let textIndex = 0;
let charracterIndex = 0;

function typewritter() {
  if (charracterIndex < text[textIndex].length) {
    textElement.innerHTML += text[textIndex].charAt(charracterIndex);
    charracterIndex++;
    setTimeout(typewritter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElement.innerHTML.length > 0) {
    textElement.innerHTML = textElement.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % text.length;
    charracterIndex = 0;
    setTimeout(typewritter, 500);
  }
}

window.onload = typewritter;