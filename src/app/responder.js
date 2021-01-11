export default class Responder {
    constructor() {
        this._defaultResponse = "nie rozumiem"
        this._expressionDictionary = [
            ["dzień dobry", "witaj"],
            ["dobry wieczór"],
            ["do widzenia", "do zobaczenia", "na razie", "żegnaj"],
            ["cześć", "siema", "elo"]
        ]
    }
    respondTo(msg) {
        for (const expressionArr of this._expressionDictionary){
            if (expressionArr.some(expression => msg.includes(expression))){
                return expressionArr[this._randomInt(expressionArr.length)];
            }
        }
        return this._defaultResponse;
    }
    _randomInt(upperB) {
        return Math.floor(Math.random() * upperB)
    }
}