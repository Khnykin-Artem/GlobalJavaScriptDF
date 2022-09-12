"use strict"

function deepEqual(firstObj, secondObj) {
    const firstObjStr = JSON.stringify(firstObj);
    const secondObjStr = JSON.stringify(secondObj);

    if(firstObjStr === secondObjStr) {
        return true;
    } else {
        return false;
    };
};

