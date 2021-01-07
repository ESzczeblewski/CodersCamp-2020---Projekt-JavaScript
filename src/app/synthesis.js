export default class SpeakAssistant {
    constructor(utteranceInfo) {
        this.utterance = new SpeechSynthesisUtterance();
        this.utteranceInfo = utteranceInfo;
        this.utterance.lang = this.utteranceInfo.lang;
        // this.utterance.text = this.utteranceInfo.text;
        this.isTalking = window.speechSynthesis.speaking;
    }
    talk(msg) {
        this.utterance.text = msg;
        window.speechSynthesis.speak(this.utterance);
        this.utterance.onstart = function () {
            this.isTalking = true;
        }
        this.utterance.onend = function() {
            this.isTalking = false;
            return this.isTalking;
        }
    }
    stopTalking() {
        window.speechSynthesis.cancel();
        this.isTalking = false;
        return this.isTalking;
    }
    // checkIfTalking() {
    //     this.isTalking = window.speechSynthesis.speaking;
    //     return this.isTalking;
    // }
}
// const assistant = new SpeakAssistant({lang: "pl-PL"});
