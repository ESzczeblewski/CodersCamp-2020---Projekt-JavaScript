export default class ChangeUI {
    constructor() {
        this.button = null;
        this.face = null
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.face = document.querySelector('.btnFace');

            // this.button = document.querySelector('.btnSpeak');
            // button.addEventListener('click', buttonOnClick);

            // function buttonOnClick() {
            //     face.classList.add("listening");
            // }
        })
    }

    record(isRecord) {
        isRecord ? this.face.classList.add('record') : this.face.classList.remove('record');
    }

    listen(isListen) {
        isListen ? this.face.classList.add('listening') : this.face.classList.remove('listening');
    }

    speak(isSpeak) {
        isSpeak ? this.face.classList.add('speak') : this.face.classList.remove('speak');
    }
    stop() {
        this.face.classList.add('btnFace');
    }
}
