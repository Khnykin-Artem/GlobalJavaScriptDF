"use strict"

function reverseArrayInPlace(arr) {
    const reversedArrayInPlace = [];

    const firstEl = arr[0];
    const lastEl = arr[arr.length - 1];

    let i = arr.lastIndexOf(lastEl);
    while(i >= 0) {
        reversedArrayInPlace.push(arr[i])
        
        i--;
    };

    return reversedArrayInPlace;
};

