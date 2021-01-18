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

