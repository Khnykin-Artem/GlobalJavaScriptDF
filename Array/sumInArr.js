"use strict"

function sumInArr(arr) {
    var sum = 0;

    let i = 0;
    while(i < arr.length) {
        sum += Number(arr[i]);
        ++i;
    };

    if(Object.is(sum, NaN)) {
        return NaN;
    } else {
        return sum;
    };
};
