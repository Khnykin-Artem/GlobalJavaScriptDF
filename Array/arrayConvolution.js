"use strict"

function arrayConvolution(arr) {
    const newArray = arr.reduce((newArr, el) => {
        return newArr.concat(el);
    }, []);

    return newArray;
};