const stringLength = require('./index');

test('length of string', () => {
    expect(stringLength('breakfast')).toBe(9)
})