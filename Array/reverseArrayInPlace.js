"use strict"

function reverseArrayInPlace() {
    const reversedArrayInPlace = [];

    const firstEl = this[0];
    const lastEl = this[this.length - 1];

    let i = this.lastIndexOf(lastEl);
    while(i >= 0) {
        reversedArrayInPlace.push(this[i])
        
        i--;
    };

    return reversedArrayInPlace;
};

