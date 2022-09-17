"use strict"

function arrayConvolution() {
    const newArray = this.reduce((newArr, el) => {
        return newArr.concat(el);
    }, []);

    return newArray;
};