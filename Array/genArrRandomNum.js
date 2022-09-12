"use strict"

function genArrRandomNum(count, n, m) {
    function random(min, max) {
        return Math.floor((Math.random() * (Math.max(max, min) - Math.min(min, max)))
        + Math.min(min, max));
    };

    let arr = Array.from({length: count}, el => el);

    arr = arr.map(() => {
        return random(n, m);
    });

    return arr;
};