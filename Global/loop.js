"use strict"

function loop(condition, body, i) {
    if(condition()) {
        body();
        i();
    };
};