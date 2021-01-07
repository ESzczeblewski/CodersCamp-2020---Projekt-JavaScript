import 'regenerator-runtime/runtime'; //Parcel async/await

import SpeechRecognition from './recognition.js';
import SpeakAssistant from './synthesis.js';

export default class Engine {
  static async init() {
    const synthesisAssistant = new SpeakAssistant({lang: "pl-PL"});
    const msg = 'Nie rozumiem';
    await SpeechRecognition.recognize();
    synthesisAssistant.talk(msg);
    if (synthesisAssistant.isTalking === false) {
      await SpeechRecognition.recognize();
      synthesisAssistant.talk(msg);
    }
  }
}