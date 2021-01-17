const axios = require('axios').default;

export default class wikiAPI {

    constructor() {
        this._phrase = "";
    }
    
    async processPhrase(phrase) {
        this._phrase = phrase;
        return await this._wikiRequest();
    }

    _wikiRequest() {
        return new Promise((resolve, reject) => {
            const requestURL = `https://pl.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=${this._phrase}`;
            axios.get(requestURL).then(response => {
                if(response.data.query.searchinfo.totalhits === 0) {
                    resolve("");
                } else {
                    resolve(response.data.query.search);
                }
            }).catch(error => {
                reject(error);
            });
        });
    }
}