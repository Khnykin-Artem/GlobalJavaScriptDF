"use strict"

function findOdd() {
    const returnF = function(num) {
      return num;
    };
  
    let i = 0;
    while(i < this.length) {
      let checkEl = this[i];
      var countCheckEl = {
        value: 0,
        num: null
      };
  
      this.forEach((value, key) => {
        if(value === checkEl) {
          countCheckEl.value++;
        };
  
        if(key === (this.length - 1)) {
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