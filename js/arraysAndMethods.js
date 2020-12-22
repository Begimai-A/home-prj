"use strict";

const str=prompt("", "");
const products=str.split(", "); // method split(", ") makes string into array

products.sort(); // method sort () with strings and arrays


console.log(products.join("; ")); // method join (": ") makes array into string

// method sort with numbers

const num=[ 1, 8, 12, 6, 90];
num.sort(sortNumbers);
console.log (num);

function sortNumbers (a, b) { // sort method () with numbers  works only with this function
    return a-b;
} 


