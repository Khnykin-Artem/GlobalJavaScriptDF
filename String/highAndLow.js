"use strict"

function highAndLow(numbers){
    var validString = '';
  
    numbers
        .split(' ')
        .forEach((num, i) => {
            if(i === 0) {
                validString = num;
            } else if(+num > +validString) {
                validString = num;
            };
      });
    
    numbers
        .split(' ')
        .forEach((num, i) => {
            if(i === 0) {
                validString += (' ' + num);
            } else if(+num < +validString.slice(2)) {
                validString = validString.split(' ')[0] + ' ' + num;
            };
        });
    
    return validString;
};