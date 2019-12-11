/**
 * Make a function which can receive two parameters.
 * This function must return the sum of those parameters.
 * It means that the parameters must be numbers.
 * If one of the parameters is different than a number the function must return null.
 * Make an unit tests for this function.
 * You need to guarantee:
 *
 * - When the function receives the number 2 as first parameter
 * and the number two as the second, the function must return 4.
 *
 * - When the function receives the first parameter as not a number
 * the function must return null.
 *
 * - When the function receives the second parameter as not a number
 * the function must return null.
 *
 * - When the function receives both parameter as not a number the function  must return null.
 **/
const { Sum } = require('./mySum');

describe('mySum Function Unit Test', () => {
    it('must return 4', () => {
        const mySum = Sum(2, 2);
        expect(mySum).toEqual(4);
    });

    it('must return 4 when I pass my parameters as string', () => {
        const mySum = Sum('2', '2');
        expect(mySum).toEqual(4);
    });

    it('must return null when my first parameter is not a number', () => {
        const mySum = Sum( null, 2);
        console.log(mySum);
        expect(mySum).toEqual(null);
    });

    it('must return null when my second parameter is not a number', () => {
        const mySum = Sum(2, null);
        expect(mySum).toEqual(null);
    });

    it('must return null when both of my parameters', () => {
        const mySum = Sum(null, null);
        expect(mySum).toEqual(null);
    });
});