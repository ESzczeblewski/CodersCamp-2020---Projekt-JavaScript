class Recognition {
    constructor(settings = {}) {
			this.settings = settings;
			this.speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
			this.recognition = new this.speechRecognition();
			this.result = null;
			this.listening = false;
    }

    startRecognition() {
			this.recognition.lang = this.settings.lang || 'pl-PL';
      this.recognition.continuous = true;
			this.recognition.interimResults = false;
			this.recognition.start();
			this.recognition.onresult = function(event) {
				const { resultIndex } = event;
				this.result = event.results[resultIndex][0].transcript.trim();
				console.log(this.result);
			}
		}

		startListening(listen) {
			if (listen) {

			}

		}

		onResult(callback) {
			this.recognition.addEventListener('result', () => {
				callback(this.result);
			})

		}

		stopRecognition() {
			window.SpeechRecognition.abort();
			this.recording = false;
		}

}

export default Recognition;