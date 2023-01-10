"use strict"

function printerError(s, range) {
    const [x, y] = range;
    const regExp = new RegExp(
        `[^${x}-${y}]`
    );

    const coincidence = [];

    for(let el of s) {
        if(regExp.test(el) === true) {
            coincidence.push(el);
        }
    }

    if(coincidence.length > 0) {
        return `${coincidence.length}/${s.length}`;
    } else {
        return `${0}/${s.length}`;
    }
}



