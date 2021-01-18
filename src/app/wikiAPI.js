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
            const requestURL = `https://pl.wikipedia.org/w/api.php`;
            axios.get(requestURL, {
                params: {
                    action: "query",
                    list: "search",
                    srsearch: this._phrase,
                    prop: "extracts",
                    exchars: 1200,
                    format: "json",
                    origin: "*",
                    srlimit: 5,
                }
            }).then(response => {
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