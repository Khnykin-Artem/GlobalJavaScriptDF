"use strict"

function removeChar(str) {
    if(str.length <= 2) {
        return str;
    } else {
        const validStr = (" " + str).slice(2, (str.length));
        return validStr;
    };
};

