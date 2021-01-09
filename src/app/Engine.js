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
        this.recognition.startRecording();
        this.recognition.listen(true);
        button.classList.add("lisining");
    })
  }

  listenLoop() {
    this.recognition.onRecognitionResult(result => {
      this.recognition.startRecording();

      if  (result !== 'test') {
        this.recognition.listen(false);
        console.log(result);
        return;
      }
    })
  }

}