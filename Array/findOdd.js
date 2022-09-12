"use strict"

function findOdd(arr) {
    const returnF = function(num) {
      return num;
    };
  
    let i = 0;
    while(i < arr.length) {
      let checkEl = arr[i];
      var countCheckEl = {
        value: 0,
        num: null
      };
  
      arr.forEach((value, key) => {
        if(value === checkEl) {
          countCheckEl.value++;
        };
  
        if(key === (arr.length - 1)) {
            ((Number.isInteger(countCheckEl.value / 2)))
            ||
            (countCheckEl.num = checkEl);
        };
      });
  
      if(countCheckEl.num !== null) {
        return returnF(countCheckEl.num);
      };
  
      ++i;
    };
  
    return returnF(countCheckEl.num);
};