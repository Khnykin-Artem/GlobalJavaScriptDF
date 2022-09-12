"use strict"

function sumInObj(obj) {
    var sum = 0;

    for(let key in obj) {
        sum += obj[key];
    };

    if(!Number.isNaN(+sum)) {
        return sum;
    } else {
        return 0;
    };
};