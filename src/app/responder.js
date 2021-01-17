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
                console.log(element)
                let stringSimilarity = require("string-similarity");
                let similarity = stringSimilarity.compareTwoStrings(msg, element);
                console.log(similarity);
                console.log(msg);

                if (similarity >= 0.6) {
                    console.log("dzialalaaaa");
                    let similaryWord = element;
                    console.log(similaryWord);
                    return command.answer();
                }

    async respondTo(msg) {

        for (const command of this._commandList) {
            if (command.request.some(expression => msg.includes(expression))) {
                return await command.answer(msg);
            }
        }
        return this._defaultResponse;
    }
}