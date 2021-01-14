const axios = require('axios').default;

export default class wikiAPI {
    constructor() {
    }
    
    async processPhrase (phrase) {
        this.phrase = phrase;
        await this.wikiRequest(this.phrase);
        return this.wikiResults;
    }

    async wikiRequest(phrase) {
        const requestURL = `https://pl.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=${phrase}`;
        await axios.get(requestURL)
            .then((response) => {
                if(response.data.query.searchinfo.totalhits === 0) {
                    this.wikiResults = 'Na Twoje pytanie ludzkość nie znalazła jeszcze odpowiedzi. Spróbuj zapytać o coś innego!';
                    return this.wikiResults;
                } else {
                    this.wikiResults = response.data.query.search;
                    return this.wikiResults;
                }
            }, (error) => {
                console.log(error);
            });
    }
}