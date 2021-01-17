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
        this.container = document.querySelector('.container');
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
        this._clear();
        this.face.classList.add('btnFace');
    }

    _clear() {
        this._classes.forEach(item => this.face.classList.remove(item));
    }

    removeLinksList() {
        if (this.container.querySelector('.wiki')) {
            this.container.querySelector('.wiki').remove();
        }
    }

    renderLinks(arr) {
        this.removeLinksList();

        const wikiDiv = document.createElement('div');
        wikiDiv.classList.add('wiki');

        const wikiListDiv = document.createElement('div');
        wikiListDiv.classList.add('wiki-list');

        const wikiLink = 'https://pl.wikipedia.org/?curid=';

        const linksArr = arr.map(el => `<a class="wiki-list-item" href="${wikiLink}${el.pageid}" target="_blank">${el.title}</a>`);

        wikiListDiv.innerHTML = linksArr.join('');

        wikiDiv.insertAdjacentElement('beforeend', wikiListDiv);

        this.container.insertAdjacentElement('afterbegin', wikiDiv);
    }
}
