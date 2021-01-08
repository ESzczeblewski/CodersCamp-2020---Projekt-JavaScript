import 'regenerator-runtime/runtime'; //Parcel async/await

import Recognition from './recognition.js';
import SpeakAssistant from './synthesis.js';

export default class Engine {
  constructor(settings = {}) {
    this.settings = settings;
    this.recognition = null;
    this.assistantName = "Krysia";

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
    this.recognition.onRecognitionResult(result => {
      
      this.recognition.startRecognition();
      this.wakeWord(result);
    })
  }

  wakeWord(sentence) {
    if (sentence.includes(this.assistantName)){  
      const indexOfWord = sentence.indexOf(this.assistantName);
      console.log(sentence.substring(indexOfWord + this.assistantName.length +1, sentence.length));
    }
  }
}