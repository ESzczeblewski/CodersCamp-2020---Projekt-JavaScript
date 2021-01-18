const { _internalResponse, _randomInt } = require('../src/app/commands');

test('check if randomInt is correct', () => {
    expect(_internalResponse.bind({ request: ['elo'] })()).toEqual('elo');
})