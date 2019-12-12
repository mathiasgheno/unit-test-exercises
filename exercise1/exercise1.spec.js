/**
 * Make a function.
 * This function must receive an object of person as the first parameter,
 * an array as the second one and a boolean as the third parameter.
 * The object must have an "id" as property.
 * The function must verify if the array already has an object
 * with the same id as the object passed as parameter.
 * If there is, the function must do nothing.
 * If there isn't, the function must add the object in the array.
 * But, if the third parameter is true,
 * the function must add the object in the array without doing any validation.
 * The third parameter is optional.
 * You need to guarantee:
 *
 * - When the function doesn't receive the first or the second argument,
 * nothing must happen.
 *
 * - When the function receives one object and its is new,
 * the object must be added in the array.
 *
 * - When the function receives one object and it is not new,
 * the array must suffer no change.
 *
 * - When the third parameter receives true,
 * the object in the array must be added without validation.
 *
 *
 **/

const { addItem } = require("./exercise1");

describe('Unit Test: Exercise 1', () => {
    let obj = {
        id: 'xxxxsss',
    };

    it('should not update array fi the secund or the first parameter be invalid', () => {
       let array = [];
       let obj = {};

       addItem(null, array);
       expect(array).toEqual([]);

        addItem(obj);
       expect(obj).toEqual({});
       expect(array).toEqual([]);
    });

    it('must add a new object in the array', () => {
        let array = [{id: 'sss'}];

        addItem(obj, array);

        expect(array.length).toEqual(2);
    });

    it('array must be equal', () => {
        let array = [{id: 'xxxxsss'}];

        addItem(obj, array);

        expect(array.length).toEqual(1);
    });

    it('must add a new object in the array when the third parameter is true', () => {
        let array = [{id: 'xxxxsss'}];

        addItem(obj, array, true);

        expect(array.length).toEqual(2);
    });
});