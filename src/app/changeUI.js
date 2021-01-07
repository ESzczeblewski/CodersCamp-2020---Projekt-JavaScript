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

    record() {
        this.face.classList.add('record')
    }

    listen() {
        this.face.classList.add('listening');
    }
    speak() {
        this.face.classList.add('speak');
    }
    stop() {
        this.face.classList.add('btnFace');
    }

}




