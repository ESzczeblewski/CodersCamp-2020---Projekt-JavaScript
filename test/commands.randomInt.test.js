const { _internalResponse, _randomInt } = require('../src/app/commands');

test('rcheck if randomInt is correct', () => {
    expect(typeof _randomInt()).toBe('number');
    expect(_randomInt(3)).toBeLessThan(3);
})