import 'regenerator-runtime/runtime'; //Parcel async/await

import Recognition from './recognition.js';
import SpeakAssistant from './synthesis.js';

export default class Engine {
  constructor(settings = {}) {
    this.settings = settings;
    this.recognition = null;
  }

  init() {
    this.recognition = new Recognition({
      lang: this.settings.lang,
    });
    this.startBtn();
    this.listenLoop();
  }

  startBtn() {
    const button = document.querySelector('.btnSpeak');
    button.addEventListener('click', () => {
      button.classList.add("lisining");
      this.recognition.startRecognition();
    })
  }

  listenLoop() {
    this.recognition.onResult(result => {
      console.log(result);
    })
  }
}