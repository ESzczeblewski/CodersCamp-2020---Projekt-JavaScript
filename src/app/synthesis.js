export default class SpeakAssistant {
    constructor(utteranceInfo = {}) {
        this.utterance = null;
        this.utteranceInfo = utteranceInfo;
        this.isTalking = false;
    }
    talk(msg = "Nie wiem, co powiedzieć") {
        try {
            this.utterance = new SpeechSynthesisUtterance();
            this.utterance.lang = this.utteranceInfo.lang || 'pl-PL';
            this.utterance.pitch = this.utteranceInfo.pitch || 1;
            this.utterance.rate = this.utteranceInfo.rate || 1;
            this.utterance.volume = this.utteranceInfo.volume || 1;
            this.utterance.voice = this.utteranceInfo.voice || window.speechSynthesis.getVoices().find(el => el.lang === this.utterance.lang || el.default === true);
            this.utterance.text = msg;
            window.speechSynthesis.speak(this.utterance);
            this.utterance.onstart = function () {
                this.isTalking = true;
            }
        } catch (err) {
            console.error('This browser cannot use Web Speech Assistant or given utterance settings were incorrect. Please change to Google Chrome and/or check if all settings are correct.');
        }
    }
    invokeAfterTalk(callback = () => {}) {
        this.utterance.addEventListener('end', () => {
            this.isTalking = false;
            callback();
        });
    }
    stopTalking() {
        window.speechSynthesis.cancel();
        this.isTalking = false;
        return this.isTalking;
    }
}
// const assistant = new SpeakAssistant({lang: "pl-PL"});
