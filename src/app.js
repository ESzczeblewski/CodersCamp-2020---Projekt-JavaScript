const button = document.getElementById('button');

import Engine from './engine.js';
const engine = new Engine();
button.addEventListener('click', buttonOnClick);

function buttonOnClick() {
    button.style.backgroundColor = "green";
    engine.init();
}