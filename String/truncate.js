"use strict"

function truncate(str, maxLength) {
    if(str.length <= maxLength) {
        return str;
    } else {
        const strMaxLenMinOne = str.substring(0, (maxLength - 1));
        const validStr = strMaxLenMinOne.padEnd(maxLength, '…');

        return validStr;
    };
};

