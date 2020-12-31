export default class SpeechRecognition {
    async recognise() {
        return new Promise(resolve => {
            const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
            const recognition = new SpeechRecognition();

            recognition.continuous = false;
            recognition.lang = 'pl-PL';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.onresult = function(event) {
                recognition.stop();
                resolve(event.results[0][0].transcript);
            }

            recognition.start();
        });
    }
}