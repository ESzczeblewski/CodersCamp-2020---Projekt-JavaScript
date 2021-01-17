import 'regenerator-runtime/runtime'; //Parcel async/await

import Recognition from './recognition.js';
import SpeakAssistant from './synthesis.js';
import ChangeUI from './changeUI.js';
import Responder from './responder.js';

export default class Engine {
  constructor(settings = {}) {
    this.settings = settings;
    this.recognition = null;
    this.assistantName = this.settings.name || "krysia";
  }

  init() {
    this.recognition = new Recognition({
      lang: this.settings.lang,
    });
    this.synthesis = new SpeakAssistant();
    this.changeUI = new ChangeUI();
    this.responder = new Responder();
    this.startBtn();
    this.listenLoop();
  }

  startBtn() {
    const button = document.querySelector('.btnSpeak');
    button.addEventListener('click', () => {
        console.log(!this.recognition.recording);
        console.log(this.synthesis.isTalking);
        this.changeUI.record();
        if(!this.recognition.recording){
          this.recognition.startRecording();
        } else if (this.synthesis.isTalking){
          this.synthesis.stopTalking();
        } else {
          this.recognition.stopRecording();
          this.changeUI.stop();
        }
    })
  }

  listenLoop() {
    this.recognition.onRecognitionResult(async (result) => {
      if (result === this.assistantName && this.recognition.listening === false) {
        this.recognition.listen(true);
        this.changeUI.listen();
      } else if (result !== this.assistantName && this.recognition.listening === true) {
        this.recognition.listen(false);
        console.log(`result: ${result}`);
        let answer = await this.responder.respondTo(result);
        console.log(`answer: ${answer}`);
        this.changeUI.speak();
        this.synthesis.talk(answer);
        this.synthesis.invokeAfterTalk(() => {
          this.changeUI.record();
        });
      }
    });
  }
}
