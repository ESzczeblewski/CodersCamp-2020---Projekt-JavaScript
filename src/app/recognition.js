export default class Recognition {

	constructor(settings = {}) {
		this.settings = settings;
		this.speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		this.recognition = new this.speechRecognition();
		this.result = '';
		this.recording = false;
		this.listening = false;
	}

	startRecognition() {
		this.recognition.lang = this.settings.lang || 'pl-PL';
		this.recognition.continuous = false;
		this.recognition.interimResults = false;

		this.recognition.addEventListener('result', event => {
			const { resultIndex } = event;
			const recognized = event.results[resultIndex][0].transcript.trim();

			if (this.recording) {
				this.result = recognized.toLowerCase();
				return;
			}

			this.result = '';
		});
	}

	onRecognitionResult(callback) {
		this.recognition.addEventListener('end', () => {
			if (this.recording){
				if (this.result !== '') callback(this.result);
				this.startRecording();
			}
		});
	}

	listen(state){
		state ? this.listening = true : this.listening = false;
		this.result = '';
	}

	startRecording() {
		this.recording = true;
		this.recognition.start();
	}

	stopRecording() {
		this.recording = false;
		this.recognition.abort();
	}
}