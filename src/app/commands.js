import wikiAPI from './wikiAPI.js';
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
            for (const wikiQuestion of this.request){
                if(msg.includes(wikiQuestion)) {
                    const wikiSearchPhrase = msg.replace(`${wikiQuestion} `, "");
                    const wikiAnswersArr = await wikipedia.processPhrase(wikiSearchPhrase); // zwraca tablicę obiektów (albo pustego stringa, jeśli brak odpowiedzi na zadane hasło)
                    console.log(wikiAnswersArr); //DEV ONLY
                    return "Przeszukałem wiki";  
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
        request: ["godzina", "czas"],
        answer() {
            const now = new Date();
            return now.toLocaleTimeString();
        }
    },

    {
        //Day of the week
        request: ["dzień tygodnia"],
        answer() {
            const now = new Date();
            let response;
            const dayNumber = now.getDay();
            switch(dayNumber){
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
        request: ["dzień"],
        answer() {
            const now = new Date();
            return now.toLocaleDateString();
        }
    }
]

function _internalResponse() {
    const respArray = this.request;
    return respArray[_randomInt(respArray.length)]
}

function _randomInt(upperB) {
    return Math.floor(Math.random() * upperB)
}