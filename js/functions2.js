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


