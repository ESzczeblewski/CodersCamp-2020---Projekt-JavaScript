import wikiAPI from '../src/app/wikiAPI';
import axios from 'axios';

const wiki = new wikiAPI();

jest.mock('axios');

const mockWikiResponse = (mySearch, myTotalhits) => {
    return {data: {query: {search: mySearch, searchinfo: {totalhits: myTotalhits}}}}
}

test('check if found phrase', () => {
    
    const result = "wikiresult";
    const totalHits = 1;
    const resp = mockWikiResponse(result, totalHits)

    axios.get.mockResolvedValue(resp);
    return wiki._wikiRequest().then(data => expect(data).toEqual(result));
})

test('check for no phrase', () => {
    const resp = mockWikiResponse(null, 0);

    axios.get.mockResolvedValue(resp);
    return wiki._wikiRequest().then(data => expect(data).toEqual(''));
})

test(' check processPhrase function', () => {
    const result = "wikiresult";
    const totalHits = 1;
    const phrase = "Piłsudski";
    const resp = mockWikiResponse(result, totalHits)
    axios.get.mockResolvedValue(resp);
    
    return wiki.processPhrase(phrase).then(data => expect(data).toEqual(resp.data.query.search));
})

test('Invalid response', async () => {
    const phrase = 'auto';
    const error = 'błąd';
    axios.get.mockRejectedValue(error);
    return wiki.processPhrase(phrase).catch(data => expect(data).toBe(error));

});
