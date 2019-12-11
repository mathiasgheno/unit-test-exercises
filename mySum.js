// TDD -> Test Driven Development.

function Sum(parameter1, parameter2) {

    const myNumber1 = Number.parseInt(parameter1);
    const myNumber2 = Number.parseInt(parameter2);

    const isMyParameter1NotValid = Number.isNaN(myNumber1);
    const isMyParameter2NotValid = Number.isNaN(myNumber2);

    if (isMyParameter1NotValid || isMyParameter2NotValid) {
        return null;
    }

    return myNumber1 + myNumber2;
}

module.exports = {
    Sum,
};