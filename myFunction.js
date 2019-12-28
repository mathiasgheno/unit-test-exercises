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

function thereIs (person, people) {
    return people.some(function(p) {
        return p.id === person.id;
    });
}

function myFunction(person, people, force) {
     if ( people === null || person === null) {
         return
     }
     if (!thereIs(person, people) || force) {
         people.push(person);
     }

};


module.exports = {
    myFunction,
};