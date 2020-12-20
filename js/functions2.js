"use strict";
// # 1st exercise Functions page 140

let multiply=function(a, b) {
    return a*b;
};

let add=function (multiply, c) {
    return multiply+c;
};

// multiply (36325, 9824); what is wrong with this code???
// add (multiply, 777);

let result=add(multiply(36325, 9824), 777);

console.log(result);

// 2nd exercise "Совпадают ли массивы?"

let areArraysSame=function (array1, array2) {
//   if (array1.length!=array2.length) {
//       return false;
//   }

  for (let i=0; i<array1.length; i++){
      if (array1[i] !=array2[i] || array1.length!=array2.length ) {
          return false;
      }
  }
  return true;
};

let arraysCheck=areArraysSame ([1, 2, 3], [1, 2, 3 ]);

console.log(arraysCheck);

let areWordsSame=function (word1, word2) {
    //   if (array1.length!=array2.length) {
    //       return false;
    //   }
    
      for (let i=0; i<word1.length; i++){
          if (word1[i] !=word2[i] || word1.length!=word2.length ) {
              return false;
          }
      }
      return true;
    };
    
    let wordCheck=areWordsSame ("Anna", "anna");
    
    console.log(wordCheck);

// 3rd exercise "Виселица и функции"

// Callback function






