import Engine from './app/engine.js';

const button = document.querySelector('.btnSpeak');

const engine = new Engine();

button.addEventListener('click', buttonOnClick);

function buttonOnClick() {
    button.classList.add("lisining");
    engine.init.bind(engine);
}