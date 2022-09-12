"use strict"

function findEvenIndex(arr) {

    function returnNumber(num = null) {
      return num;
    }
  
    let sum = +"";
    var sum1 = {
      value: +"",
      index: 0
    },
        sum2 = {
          value: +"",
          index: 0
        };
    var num = null;    
  
  
     
    for(let i = 0;i < arr.length;i++) {
      (Object.keys(arr)).forEach(el => {
        if(el != i) {
          if(el < i) {
            sum1.value += Number(arr[el]);
            sum1.index = i;         
          } else if(el > i) {
            sum2.value += Number(arr[el]);
            sum2.index = i;
            if(sum1.index == sum2.index) {
              if(sum1.value === sum2.value) {
                num = i;
                sum2.index = i;          
              };             
            };
            if(el == arr.length - 1) {
              sum1.value = 0;
              sum2.value = 0;
            }                
          };
        };      
      }); 
    };
  
    if(num !== null) {
      return returnNumber(num);
    } else {
      return -1;
    };
};
  

  
