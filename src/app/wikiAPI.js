const axios = require('axios').default;

export default class wikiAPI {
    constructor() {
    }
    
    async processPhrase (phrase) {
        this.phrase = phrase;
        await this.wikiRequest(this.phrase);
        console.log(`w processPhrase:`);
        console.log(this.wikiResults);
        return this.wikiResults;
    }

    async wikiRequest(phrase) {
        const requestURL = `https://pl.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${phrase}`;
        await axios.get(requestURL)
            .then((response) => {
                if(response.data.query.searchinfo.totalhits === 0) {
                    this.wikiResults = 'Na Twoje pytanie ludzkość nie znalazła jeszcze odpowiedzi. Spróbuj zapytać o coś innego!';
                    console.log(this.wikiResults);
                    return this.wikiResults;
                } else {
                    this.wikiResults = response.data.query.search;
                    console.log(`w wikiRequest:`);
                    console.log(this.wikiResults);
                    return this.wikiResults;
                }
            }, (error) => {
                console.log(error);
            });
    }
}