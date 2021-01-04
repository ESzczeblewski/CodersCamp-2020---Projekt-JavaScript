export default class SpeechRecognition {
    static async recognize() {
        return new Promise(resolve => {
            const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
            const recognition = new SpeechRecognition();

            recognition.continuous = true;
            recognition.lang = 'pl-PL';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.onresult = function(event) {
                const { resultIndex } = event;
                resolve(event.results[resultIndex][0].transcript);
                console.log(event.results[resultIndex][0].transcript.trim());
            }

            recognition.start();
        });
    }
}