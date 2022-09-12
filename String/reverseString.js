"use strict"

function reverseString(str) {
    const reversedString = Array();

    let i = 0;
    while(i < str.length) {
        reversedString.unshift(arr.at(i));

        ++i;
    };

    return reversedString.join('');
};