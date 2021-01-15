import { Commands }  from "./commands"

export default class Responder {
    constructor(settings = {}) {
        this._settings = settings
        this._defaultResponse = this._settings.defaultResponse || "nie rozumiem";
        this._commandList = Commands;
    }
    respondTo(msg) {
        for (const command of this._commandList){
            if (command.request.some(expression => msg.includes(expression))){
                return command.answer();
            }
        }
        return this._defaultResponse;
    }
}