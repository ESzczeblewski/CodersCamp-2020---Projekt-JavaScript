import 'regenerator-runtime/runtime'; //Parcel async/await

import SpeechRecognition from './recognition.js';
import SpeakAssistant from './synthesis.js';

export default class Engine {
  static async init() {
    const msg = 'Nie rozumiem';
    await SpeechRecognition.recognize();
    const speech = SpeakAssistant.talk(msg);
    if (speech === true) {
      this.init();
    }
  }
}