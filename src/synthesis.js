export default class SpeakAssistant {
    static talk(message) {
        let response = new SpeechSynthesisUtterance();
        response.lang = 'pl-PL';
        response.text = message;
        window.speechSynthesis.speak(response);
    }
}

//SpeakAssistant.talk("elo elo");