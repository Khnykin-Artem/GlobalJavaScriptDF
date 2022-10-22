"use strict"

function hasOwnProperty(prop, arr) {
    this.__proto__ = null;
    const cloneObj = JSON.parse(JSON.stringify(this))
    const filterArr = arr.filter((el) => {
        return el === prop;
    })
    if(filterArr.length !== 0) {
        filterArr.forEach((el) => {
            for(let key in cloneObj) {
                if(el === key) {
                    delete cloneObj[el]
                }
            }
        })
    }

    for(let key in cloneObj) {
        if(key === prop) {
            return true;
        }
    }

    return false;
}