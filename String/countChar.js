"use strict"

function countChar(string, symbol) {
    if(symbol === undefined) {
        return countBs(string);
    } else {
            string = string + "";
            var arr = [];
            for(let i = 0;i < string.length;i++) {
                if(string[i] === `${symbol}`) {
                    arr.push(true);
                };
            };
        
            return arr.length;
    };
};