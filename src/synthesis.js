export class SpeakAssistant {
    static talk(message) {
        let response = new SpeechSynthesisUtterance();
        response.lang = 'PL';
        response.text = message;
        window.speechSynthesis.speak(response);
    }
}

//SpeakAssistant.talk("elo elo");