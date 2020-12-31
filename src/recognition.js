export default class SpeechRecognition {
    async recognise() {
        return new Promise(resolve => {
            var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
            var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

            let result;

            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.lang = 'pl-PL';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.start();

            recognition.onresult = function(e) {
                recognition.stop();
                result = e.results[0][0].transcript;
                resolve(result);
            }

        });
    }
}