"use strict"

function setMiddleOfArray(el) {
    const index = Math.trunc(Number(this.length / 2));
    this[index] = el;
    const middleOfArray = this[index];
    return middleOfArray;
};