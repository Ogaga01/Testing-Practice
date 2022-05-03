const reverseString = require('./index')

test('reversed string', () => {
    expect(reverseString('break')).toBe('kaerb')
})