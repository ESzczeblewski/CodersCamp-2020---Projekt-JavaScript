export default class wikiAPI {
    constructor() {
    }
    
    async processPhrase (phrase) {
        this.phrase = phrase.trim(); // czy muszę trimować?
        this.wikiAnswer = await this.wikiRequest(phrase);
        console.log(this.wikiAnswer);
        return this.wikiAnswer;
    }

    async wikiRequest(phrase) {
        const requestURL = `https://pl.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${phrase}`;
        const response = await fetch(requestURL);
        // if (!response.ok) {
        //     throw Error(response.statusText);
        // }
        const jsonWikiResults = await response.json();
        console.log(jsonWikiResults);
        return jsonWikiResults;
    }
}