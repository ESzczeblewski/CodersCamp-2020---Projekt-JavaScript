import wikiAPI from './wikiAPI.js';

export default class Responder {
    constructor() {
        this._defaultResponse = "nie rozumiem";
        this._expressionDictionary = [
            ["dzień dobry", "witaj"],
            ["dobry wieczór"],
            ["do widzenia", "do zobaczenia", "na razie", "żegnaj"],
            ["cześć", "siema", "elo"]
        ];
        this._wikiQuestions = [ 
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
        ];
        this.wikipedia = new wikiAPI();
    }
    async respondTo(msg) {
        for (const expressionArr of this._expressionDictionary){
            if (expressionArr.some(expression => msg.includes(expression))){
                return expressionArr[this._randomInt(expressionArr.length)];
            }
        }
        for (const wikiQuestion of this._wikiQuestions){
            if(msg.includes(wikiQuestion)) {
                this.wikiSearchPhrase = msg.replace(`${wikiQuestion} `, "");
                this.wikiAnswersArr = await this.wikipedia.processPhrase(this.wikiSearchPhrase); // zwraca tablicę obiektów, trzeba przerobić, by zwracała właściwość '.snippet' pierwszego obiektu do czytania
                return this.wikiAnswersArr;  
            }
        }
        return this._defaultResponse;
    }
    _randomInt(upperB) {
        return Math.floor(Math.random() * upperB)
    }
}