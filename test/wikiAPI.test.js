import wikiAPI from '../src/app/wikiAPI';
import axios from 'axios';

jest.mock('axios');

test('check if found phrase', () => {
    const searchInfo = { totalhits: 1 }
    const query = { search: 'wikiResult', searchinfo: searchInfo };
    const data = { query: query }
    const resp = { data: data };
    console.log(resp)
    axios.get.mockResolvedValue(resp);
    const wiki = new wikiAPI();
    wiki._phrase = '';
    return wiki._wikiRequest().then(data => expect(data).toEqual(resp.data.query.search));
})


test('check for no phrase', () => {
    const searchInfo = { totalhits: 0 }
    const query = { search: null, searchinfo: searchInfo };
    const data = { query: query }
    const resp = { data: data };
    console.log(resp)
    axios.get.mockResolvedValue(resp);
    const wiki = new wikiAPI();
    wiki._phrase = '';
    return wiki._wikiRequest().then(data => expect(data).toEqual(''));
})
test(' check processPhrase function', () => {
    const searchInfo = { totalhits: 1 }
    const query = { search: 'wikiResult', searchinfo: searchInfo };
    const data = { query: query }
    const resp = { data: data };
    console.log(resp)
    axios.get.mockResolvedValue(resp);
    const wiki = new wikiAPI();
    const phrase = '';
    return wiki.processPhrase(phrase).then(data => expect(data).toEqual(resp.data.query.search));
})

test('Invalid response', async () => {
    const wiki = new wikiAPI();
    const phrase = 'auto'
    axios.get.mockRejectedValue('błąd');
    return wiki.processPhrase(phrase).catch(data => expect(data).toBe('błąd'));

});
