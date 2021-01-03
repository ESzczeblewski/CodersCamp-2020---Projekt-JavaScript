import SpeechRecognition from './recognition.js';

const recognition = new SpeechRecognition();
const button = document.getElementById('button');


button.addEventListener('click', onClick);
async function onClick () {
    recognition.recognize();
};
