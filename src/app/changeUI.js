export default class ChangeUI {
    constructor() {
        this.button = null;
        this.face1 = null;
        this.face = {};
        this._spanColor = ['color1', 'color2', 'color3', 'color4'];
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.face1 = document.querySelector('.btnFace');
            this._spanColor.forEach( (x,i) => {
                this[`faceColor${(i+1)}`] = document.querySelector(`.btnFace span:nth-child(${i+1})`);
            })
        })
        this.wikiDiv = document.querySelector('.wiki');
    }

    _setupLines() {
        this.face.canvas = document.getElementById("canvas");
        this.face.ctx = this.face.canvas.getContext('2d'); 

        this.face.amplitude = 0;
        this.face.frequency = 0;
        this.face.segments = 1500;
        this.face.interval = this.face.frequency / this.face.segments;
        this.face.rate = 0;
        this.face.numberOfLines = 2;
        this.face.no = 1;
        this.face.Style = 'hsl(' + (1 / 2) + ', 20%, 50%)';
              
        setInterval( () => {
            this._drawLines();
        }, 1);
    }

    _drawLines() {
       
       this.face.width = this.face.ctx.canvas.width = window.innerWidth; //vh(36);
       this.face.height = this.face.ctx.canvas.height = vh(36);
       this.face.ctx.moveTo(0, this.face.height/2);
       this.face.numberOfLines = 2;
       this.face.no++;
       this.face.ctx.strokeStyle = this.face.Style;

       function vh(v) {
           const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            return (v * h) / 100;
        }

        this.face.no++;        

       for (let i = 1; i <= this.face.numberOfLines; i++) {
    
           this.face.no++;
           this.face.rate = this.face.no / this.face.segments;
           this.face.ctx.beginPath();
           
           for ( let x = 0; x < this.face.width; x++ ) {
               const y = Math.sin(x * this.face.frequency * (i/8) * this.face.rate) * this.face.amplitude/i; 
               this.face.ctx.lineTo(x, y + this.face.height / 2);
            }

        this.face.ctx.lineWidth = 1.5;
        this.face.ctx.strokeStyle = this.face.ctx.strokeStyle; 
        this.face.ctx.stroke();

       }
    }

    record() {
        this._spanColor.forEach( (x,i) => {
            this[`faceColor${(i+1)}`].classList.remove(x);
            this[`faceColor${(i+1)}`].classList.add(`recordColor${i+1}`);
        });  
        this.removeLinksList('.wiki-list-new'); 
    }

    listen() {
        this._setupLines(); 
        this.face.amplitude = 0;
        this.face.frequency = 0;
        this.removeLinksList('.wiki-list-new');
    }

    speak() {
        this._setupLines(); 
        this.face.amplitude = 80;
        this.face.frequency = 0.02;
    }

    speakStop() {
        this._setupLines(); 
        this.face.Style = 'transparent';
        this.face.amplitude = 0;
        this.face.frequency = 0;
    }

    stop() {
        this.face1.classList.add('btnFace');
        this.removeLinksList('.wiki-list-new');
        this._spanColor.forEach( (x,i) => {
            this[`faceColor${(i+1)}`].classList.remove(`recordColor${i+1}`);
            this[`faceColor${(i+1)}`].classList.add(`btnFace-${x}`);
        });
     }

    removeLinksList(className) {
        if (this.wikiDiv.querySelector(className)) {
            this.wikiDiv.querySelector(className).remove();
        }
    }

    renderLinks(arr) {
        this.removeLinksList('.wiki-list');

        const wikiListDiv = document.createElement('div');
       
        wikiListDiv.classList.add('wiki-list-new');
        const wikiHeader = document.createElement('p')
        wikiHeader.classList.add('wiki-list-header');
        wikiHeader.innerHTML = 'Odnośniki do Wikipedii';

        const wikiLink = 'https://pl.wikipedia.org/?curid=';
        const linksArr = arr.map(el => `<a class="wiki-list-item" href="${wikiLink}${el.pageid}" target="_blank">${el.title}</a>`);
        
        wikiListDiv.innerHTML = wikiHeader;
        wikiListDiv.innerHTML = linksArr.join('');
        wikiListDiv.insertAdjacentElement('afterbegin',wikiHeader);
            
        this.wikiDiv.insertAdjacentElement('beforeend', wikiListDiv);
    }
}
