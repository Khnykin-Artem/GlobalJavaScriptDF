"use strict"

function sumSmallestNumbers(numbers, amount = 2) {
    const minNums = new Array();
    minNums[0] = 0;

    let i = 0;
    while(i < amount) {
        minNums[i] = Infinity;

        numbers.forEach(num => {
            if(i === 0) {
                (num < minNums.at(i))
                &&
                (minNums[i] = num)
            } else {
                (num < minNums.at(i) && num > minNums.at(i - 1))
                &&
                (minNums[i] = num)
            };
        });

        ++i;
    };

    const sum = minNums.reduce((sum, num) => {
        return sum += num;
    }, 0);

    return sum;
};

console.log(sumSmallestNumbers([12, 45, 3, 8, 7], 3))