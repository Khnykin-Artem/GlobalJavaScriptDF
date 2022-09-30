"use strict"

function loop(condition, body, i) {
    while(condition()) {
        body();
        i();
    };
};