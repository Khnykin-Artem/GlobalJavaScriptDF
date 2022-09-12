"use strict"

function disemvowelConsonants(str, substitute = '', exc = null) {
    const letters = [
        'b', 'c', 'd', 'f', 'g', 'h', 'j',
        'k', 'l', 'm', 'n', 'p', 'q', 'r',
        's', 't', 'v', 'w', 'x', 'y', 'z',

        'B', 'C', 'D', 'F', 'G', 'H', 'J',
        'K', 'L', 'M', 'N', 'P', 'Q', 'R',
        'S', 'T', 'V', 'W', 'X', 'Y', 'Z',
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

