"use strict"

function rowSumOddNumbers(n) {
    const allNums = [];
    let i = 1;
    while(i < n) {
        (i === 1)
        &&
        (allNums.push(i));

        (i === 0)
        ||
        (allNums.push(allNums[i - 1] + 2));

        i += 1;
    };
console.log(allNums.length)
    const sumAllNums = allNums.reduce((sum, num) => {
        return sum += num;
    });

    return sumAllNums;
};

console.log(rowSumOddNumbers(42))

