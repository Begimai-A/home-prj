"use strict";

let sayHelloTo=function (name) {
    console.log ("Hello " + name);
};

sayHelloTo("Nik");

let drawCats=function(howManyTimes) {
    for (let i=1; i<howManyTimes; i++) {
        console.log(i + "=^.^=");
    }
};

drawCats(5);


// function with two arguments

let printMultipleTimes=function(howManyTimes, whatToDraw) {
    for (let i=0; i<howManyTimes; i++) {
        console.log( i +" " + whatToDraw);
    }
};

printMultipleTimes (4, "=^-^=");

// ФУНКЦИЯ ДЛЯ ВЫБОРА СЛУЧАЙНОГО СЛОВА with return

const pickRandomWord=function(words) {
    return words [Math.floor(Math.random() * words.length)];
};

const randomWords=["rocket", "sun", "doll", "apple", "umbrella"];

const names=["Ann", "Ali", "Olga", "David"];


// pickRandomWord(randomWords);

// console.log(pickRandomWord(randomWords));

pickRandomWord(names);
console.log(pickRandomWord(names));

// Генератор дразнилок при помощи функции

let randomBodyParts=["eyes", "stomach", "legs", "nose"];
let randomAdj=["beautiful", "funny","awesome", "sad", "little"];
let randomwords=["ant", "monkey", "mouse", "egg"];

let pickRandomword=function(words) {
    return words [Math.floor(Math.random() * words.length)];
};

let randomInsult="Your "+ pickRandomword(randomBodyParts) + " is like a " + pickRandomword(randomAdj) + " "+
 pickRandomword(randomwords) + "!";

 console.log(randomInsult);


 // Усовершенствовааный генератор дразнилок при помощи функции

let pickRandomword=function(words) {
    return words [Math.floor(Math.random() * words.length)];
};

let generateRandomInsult=function () {
    let randomBody=["nose", "eyes", "face", "ears"];
    let randomAdjectives=["funny", "red", "crooked", "sad"];
    let randomAnimal=["monkey", "elephant","bee", "cat" ];

let randomString="Your "+ pickRandomword(randomBody) + " is like a " + pickRandomword(randomAdjectives) + " "+
    pickRandomword(randomAnimal) + "!";
    return randomString;
};

generateRandomInsult();

console.log(generateRandomInsult());

// выход из функции with return

let fifthLetter=function (name) {
    if (name.length<5){
        return;
    }
    return "Fifth letter of your names is " + name[4] + ".";
};

// fifthLetter("Nikolay");

console.log(fifthLetter("Nik"));












