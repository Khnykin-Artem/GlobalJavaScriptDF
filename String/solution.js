"use strict"

function solution(str, ending) {
    const strSplit = str.split(ending);
    const strSplitLastIndex = (strSplit.length - 1);

    if(strSplit[strSplitLastIndex] === '') {
        return true;
    } else {
        return false;
    };
};