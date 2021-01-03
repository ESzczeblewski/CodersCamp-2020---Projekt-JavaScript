export default class Engine {
  async init() {
    const result = await SpeechRecognition.recognize();
    SpeakAssistant.talk('nie rozumiem');
  }
}