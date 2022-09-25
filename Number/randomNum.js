"use strict"

function randomNum(min, max) {
    return Math.floor((Math.random() * (Math.max(max, min) - Math.min(min, max)))
    + Math.min(min, max));
};