import Engine from './app/engine.js';

const button = document.querySelector('.btnSpeak');

const engine = new Engine();
button.addEventListener('click', engine.init);