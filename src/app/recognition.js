class Recognition {
    constructor(settings = {}) {
			this.settings = settings;
			this.speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
			this.recognition = new this.speechRecognition();
			this.result = '';
			this.recording = false;
			this.startRecognition();
		}

    startRecognition() {

			this.recognition.lang = this.settings.lang || 'pl-PL';
      this.recognition.continuous = true;
			this.recognition.interimResults = true;
			this.recognition.addEventListener('result', event => {
				const { resultIndex } = event;
				const recognized = event.results[resultIndex][0].transcript.trim();
				if(this.recording) {
					this.result = recognized;
					return;
				}
				this.result = '';
			})
		}

		startRecording() {
			this.recognition.start();
		}

		onRecognitionResult(callback) {
			this.recognition.addEventListener('end', () => {
					callback(this.result);
			})
		}

		listen(listen) {

			if (listen === false) {
				this.recording = false;
			}

			if (listen === true) {
				this.recording = true;
			}
		}

		stopRecording() {
			this.recognition.abort();
		}

}

export default Recognition;