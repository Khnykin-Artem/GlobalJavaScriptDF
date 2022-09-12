"use strict"

function disemvowelVowel(str, substitute = '', exc = null) {
    const letters = [
        'a', 'e', 'i', 'o', 'u', 'y',

        'A', 'E', 'I', 'O', 'U', 'Y',
    ];

    if(exc === null) {
        exc = ['Y', 'y'];
    };

    var validLetters = letters.filter(letter => {
        if(exc.includes(letter)) {
            return false;
        } else {
            return true;
        };
    });

    const splitStr = str.split('');
    const validStr = splitStr.map(letter => {
        if(validLetters.includes(letter)) {
            return substitute;
        } else {
            return letter;
        };
    }).join('');

    return validStr;
};

console.log(disemvowelVowel('LOL cheeeeeeel yyyy', ' '))