"use strict"

function reverseArray() {
    const reversedArray = Array();

    let i = 0;
    while(i < this.length) {
        reversedArray.unshift(this.at(i));

        ++i;
    };

    return reversedArray;
};

