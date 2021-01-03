export default class SpeakAssistant {
    static talk(message) {
        let response = new SpeechSynthesisUtterance();
        response.lang = 'pl-PL';
        response.text = message;
        window.speechSynthesis.speak(response);
        return true;
    }
}

//SpeakAssistant.talk("elo elo");