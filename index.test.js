const capitalised = require('./index')


test('capitalised', () => {
    expect(capitalised('fiction')).toBe('Fiction')
})