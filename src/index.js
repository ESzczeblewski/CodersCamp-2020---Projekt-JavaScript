import Engine from './app/Engine.js';

const button = document.querySelector('.btnSpeak');

button.addEventListener('click', buttonOnClick);

function buttonOnClick() {
    button.classList.add("lisining");
    Engine.init();
}