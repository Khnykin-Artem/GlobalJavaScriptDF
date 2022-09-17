"use strict"

function isEven() {
    if(this === 0) {
        return true;
    } else if(this === 1) {
        return false;
    } else {
        return isEven(this - 2);
    };
};