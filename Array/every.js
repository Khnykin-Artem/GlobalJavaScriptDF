"use strict"

function every(f, exc) {
    var returnValue = true;

    this.forEach((el, i, arr) => {
        if(!f(el, i, arr)) {
            (exc === el) ?
            returnValue = returnValue :
            returnValue = false;
        };
    });

    return returnValue;
};

console.log(every.call([1, 2, 4], el => el >= 2))