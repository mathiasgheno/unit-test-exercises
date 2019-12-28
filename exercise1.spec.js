
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
const { myFunction } = require('./myFunction');

describe( 'myArray Function Unit Test', () =>{
    const myObject = {
        id:'1',
    };
    let myArray;

    beforeEach(function () {
        myArray = [];
    });

    const myBoolean = true;

    it('must return nothing when I pass nothing in 1st and 2nd parameter ', function () {

        myFunction(myObject, null);
        myFunction(null, myArray);
        expect(myObject).toEqual({
            id:'1',
        });
        expect(myArray).toEqual([]);

    });

    it( 'the function must add the object in the array', function () {
       const newObject = {
            id:'2',
       };
       myFunction(newObject, myArray);
       expect(myArray.length).toEqual(1);
    });

    it( 'the function must not add a repeated object in the array', function () {
        const newObject = {
            id:'1',
        };

        myArray.push( {
            id:'1',
        });
        myFunction(newObject, myArray);
        expect(myArray.length).toEqual(1);
    });

    it( 'the function must add without validation when 3rd param is true', function () {
        const newObject = {
            id:'1',
        };
        myArray.push( {
            id:'1',
        });
        myFunction(newObject, myArray, myBoolean);
        expect(myArray.length).toEqual(2);
        expect(myBoolean).toEqual(true);
    });

    it( 'the function must not add without validation when 3rd param is false', function () {
        const newObject = {
            id:'1',
        };
        myArray.push( {
            id:'1',
        });

        myFunction(newObject, myArray, false);
        expect(myArray.length).toEqual(1);

    })

})


