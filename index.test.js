const { addition, subtraction, multiplication, division } = require('./index')
const Calculator = require('./index')

describe('calculator', () => {
    test('addition', () => {
        expect(addition(100,20)).toEqual(120)
    });
    test('subtraction', () => {
        expect(subtraction(200,100)).toEqual(100)
    });
    test('multiplication', () => {
        expect(multiplication(10,20)).toEqual(200)
    });
    test('division', () => {
        expect(division(700,10)).toEqual(70)
    });
})