"use strict"

function rangeNums(first, last, step) {
    var nums = [];

    let i = 0;
    while(i <= last) {
        if(i >= first && i <= last) {
            nums.push(i);
        } else {};

        i += Number(step);
    };

    if(Object.is(i, NaN) === true) {
        return NaN;
    } else {
        return nums;
    };
};

