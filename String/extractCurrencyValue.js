"use strict"

function extractCurrencyValue(str) {
    var validStr = str;
    var parseFloatStr = Number.parseFloat(validStr);

    if(Number.isNaN(parseFloatStr)) {
        while(isNaN(parseFloatStr)) {
            parseFloatStr = Number.parseFloat(validStr);
            validStr = validStr.slice(1);
        };

        return parseFloatStr;
    } else {
        return parseFloatStr;
    };
};

console.log(extractCurrencyValue('$4111111gd5', 2))