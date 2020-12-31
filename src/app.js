const button = document.getElementById('button');

import Engine from './engine.js';
const engine = new Engine();
button.addEventListener('click', engine.init);