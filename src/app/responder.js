import { Commands } from "./commands"

export default class Responder {
    constructor(settings = {}) {
        this._settings = settings
        this._defaultResponse = this._settings.defaultResponse || "nie rozumiem";
        this._commandList = Commands;
    }

    respondTo(msg) {

        for (const command of this._commandList) {

            for (let element of command.request) {
                let stringSimilarity = require("string-similarity");
                let similarity = stringSimilarity.compareTwoStrings(msg.substring(0, element.length), element);

                if (similarity >= 0.6) {
                    let similaryWord = element;
                    console.log("similar word: " + similaryWord);
                    return command.answer(similaryWord);
                }
            }
        }
        return this._defaultResponse;
    }
}