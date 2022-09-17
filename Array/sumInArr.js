"use strict"

function sumInArr() {
    var sum = 0;

    let i = 0;
    while(i < this.length) {
        sum += Number(this[i]);
        ++i;
    };

    if(Object.is(sum, NaN)) {
        return NaN;
    } else {
        return sum;
    };
};
