"use strict"

function toCamelCase(str, seperate = '_') {
    var splitedStr = str.split(seperate);

    if(splitedStr[0] !== str) {
        const validStr = splitedStr.reduce((validString, word) => {
            let firstLetter = word[0];
            let incompleteWord = [];

            for(let i = 0;i < word.length;i++) {
                if(i !== 0) {
                    incompleteWord.push(word[i]);
                };
            };

            firstLetter = firstLetter.toUpperCase();
            const validWord = String(firstLetter + incompleteWord.join(''));

            return validString + validWord;
        }, '');

        return validStr;
    } else {
        return str;
    };
};
