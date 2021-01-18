const { _internalResponse, _randomInt } = require('../src/app/commands');

test('check if internalResponse is correct', () => {
    expect(_internalResponse.bind({ request: ['hello'] })()).toEqual('hello');
})

test('check if randomInt is correct', () => {
    expect(typeof _randomInt()).toBe('number');
    expect(_randomInt(3)).toBeLessThan(3);
})