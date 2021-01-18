import wikiAPI from './wikiAPI.js';
import ChangeUI from './changeUI';

export const Commands = [
    {
        //Wikipedia
        request: [
            "co to jest",
            "co to znaczy",
            "co to",
            "czym są",
            "kto to jest",
            "kto to",
            "kim jest",
            "jaki jest",
            "jaka jest",
            "jakie jest",
            "jakie są"
        ],
        async answer(msg) {
            const wikipedia = new wikiAPI();
            const uiChanger = new ChangeUI();
            for (const wikiQuestion of this.request){
                if(msg.includes(wikiQuestion)) {
                    const wikiSearchPhrase = msg.replace(`${wikiQuestion} `, "");

                    const wikiAnswersArr = await wikipedia.processPhrase(wikiSearchPhrase);
                  
                    const wikiSnippet = wikiAnswersArr[0].snippet.replace(/(<([^>]+)>)/ig, '');

                    if (wikiAnswersArr) {
                        uiChanger.renderLinks(wikiAnswersArr);
                    }
                    return wikiSnippet;
                }
            }
            return "Nie rozumiem pytania";
        }
    },
    {
        //Greeting
        request: ["dzień dobry", "witaj"],
        answer() {
            return _internalResponse.call(this);
        }
    },
    {
        //Farewell
        request: ["do widzenia", "do zobaczenia", "na razie", "żegnaj", "nara"],
        answer() {
            return _internalResponse.call(this);
        }
    },
    {
        //Salutations
        request: ["cześć", "siema", "elo",],
        answer() {
            return _internalResponse.call(this);
        }
    },
    {
        //Time request
        request: ["która jest godzina", "która godzina", "godzina", "czas"],
        answer() {
            const now = new Date();
            return now.toLocaleTimeString();
        }
    },
    {
        //Day of the week
        request: ["dzień tygodnia", "jaki jest dzień tygodnia", "jaki mamy dzień tygodnia"],
        answer() {
            const now = new Date();
            let response;
            const dayNumber = now.getDay();
            switch (dayNumber) {
                case 0:
                    response = "niedziela";
                    break;
                case 1:
                    response = "poniedziałek";
                    break;
                case 2:
                    response = "wtorek";
                    break;
                case 3:
                    response = "środa";
                    break;
                case 4:
                    response = "czwartek";
                    break;
                case 5:
                    response = "piątek";
                    break;
                case 6:
                    response = "sobota";
                    break;
            }
            return "jest " + response;
        }
    },
    {
        //Date request
        request: ["dzień", "jaki mamy dzień", "który dziś"],
        answer() {
            const now = new Date();
            return now.toLocaleDateString();
        }
    },
    {
        //Invocation from "Pan Tadeusz"
        request: ["inwokacja", "recytuj inwokację"],
        answer() {
            return "Litwo! Ojczyzno moja! Ty jesteś jak zdrowie, Ile cię trzeba cenić, ten tylko się dowie, Kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie";
        }
    }
]

export function _internalResponse() {
    const respArray = this.request;
    return respArray[_randomInt(respArray.length)]
}

export function _randomInt(upperB) {
    return Math.floor(Math.random() * upperB)
}