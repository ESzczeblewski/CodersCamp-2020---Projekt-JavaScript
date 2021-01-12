export default class ChangeUI {
    constructor() {
        this.button = null;
        this.face = null;
        this._classes = ['record', 'listening', 'speak'];
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

    record() {
        this._clear();
        this.face.classList.add('record');
    }

    listen() {
        this._clear();
        this.face.classList.add('listening');
    }

    speak() {
        this._clear();
        this.face.classList.add('speak');
    }
    stop() {
        this.face.classList.add('btnFace');
    }

    _clear() {
        this._classes.forEach(item => this.face.classList.remove(item));
    }
}
