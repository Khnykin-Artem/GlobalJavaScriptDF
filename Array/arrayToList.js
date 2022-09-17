"use strict"

function arrayToList() {
    var list = {};
    const rests = [];

    this.forEach(el => {
        rests.push({
            value: el,
            rest: {}
        });
    });
    console.log(rests)
    let i = 0;
    while(i < rests.length) {
        rests[i].rest = rests[i + 1];

        (i === (rests.length - 1))
        &&
        (rests[i].rest = null);

        i++;
    };

    list = rests[0];

    return list;
};

