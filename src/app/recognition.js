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
			this.recognition.interimResults = true;
			this.recognition.addEventListener('result', event => {
				const { resultIndex } = event;
				this.result = event.results[resultIndex][0].transcript.trim();
			})
			this.recognition.start();
		}

		startListening(listen) {
			if (listen) {

			}

		}

		onRecognitionResult(callback) {
			this.recognition.addEventListener('end', () => {
				callback(this.result);
			})

		}

		stopRecognition() {
			window.SpeechRecognition.abort();
			this.recording = false;
		}

}

export default Recognition;