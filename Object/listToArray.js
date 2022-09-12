"use strict"

function listToArray(list) {
    var array = [];

    if(!list.rest) {
        array.push(list.value);
    } else {
        array.push(list.value);

        var restList = list.rest;
        var bool = true;

        while(bool) {
            forRest: for(let restKey in restList) {
                if(restKey === 'rest') {
                    if(restList[restKey]) {
                        array.push(restList.value);
                        restList = restList[restKey];
                    } else {
                        array.push(restList.value);
                        bool = false;
                    };
                };
            };
        };    
    };

    return array;
};

