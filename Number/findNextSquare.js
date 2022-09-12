"use strict"

function findNextSquare(sq) {
    if(sq >= 0) {
        if((sq ** (1/2)) % 1 === 0) {
            let i = 1;
            while(sq < Infinity) {
                if((Math.sqrt(sq + i) % 1) === 0) {
                    return (sq + i);
                } else {
                    i++;
                }
            }
        } else {
            return -1;
        };
    } else {
        return -1;
    };
};