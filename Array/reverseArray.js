"use strict"

function reverseArray(arr) {
    const reversedArray = Array();

    let i = 0;
    while(i < arr.length) {
        reversedArray.unshift(arr.at(i));

        ++i;
    };

    return reversedArray;
};

