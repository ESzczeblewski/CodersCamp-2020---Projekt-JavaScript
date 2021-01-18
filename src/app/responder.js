import {Commands}  from "./commands"
import stringSimilarity from "string-similarity";

export default class Responder {
    constructor(settings = {}) {
        this._settings = settings
        this._defaultResponse = this._settings.defaultResponse || "nie rozumiem";
        this._commandList = Commands;
    }

    respondTo(msg) {

        for (const command of this._commandList) {
            for (const element of command.request) {
                const similarity = stringSimilarity.compareTwoStrings(msg.substring(0, element.length), element);
                if (similarity >= 0.6) {
                    return command.answer(msg);
                }
            }
        }
        return this._defaultResponse;
    }
}