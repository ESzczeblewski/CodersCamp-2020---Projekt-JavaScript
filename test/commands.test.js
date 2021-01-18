const { _internalResponse, _randomInt } = require('../src/app/commands');

test('check if randomInt is correct', () => {
    expect(_internalResponse.bind({ request: ['elo'] })()).toEqual('elo');
})

test('rcheck if randomInt is correct', () => {
    expect(typeof _randomInt()).toBe('number');
    expect(_randomInt(3)).toBeLessThan(3);
})