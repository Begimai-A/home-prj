"use strict";
 

let massiv=["first", "second", "third", "fourth"];// pro metod PUSH
massiv.push("1");
console.log(massiv);

let animals=[]; 
animals.push("cat", "dogs", "rabbits");
let leftAnimals=animals.pop();// metod pop udalyaet s kontsa
animals.unshift(leftAnimals); // metod .unshift()  dobavlyaet vnachalo

console.log(animals);

let colours=["green", "white", "blue", "brown"];
console.log(colours.indexOf("brown")); // nahodit index po elementu / index elementa brown is -3.
console.log(colours[0]);

// RANDOM DRAZNILKI

let randomBodyParts=["eyes", "stomach", "legs", "nose"];
let randomAdj=["beautiful", "funny","awesome", "sad", "little"];
let randomWords=["ant", "monkey", "mouse", "egg"];

let randomBodyPart=randomBodyParts[Math.floor(Math.random()*4)];
let randomAdject= randomAdj[Math.floor(Math.random()*5)];
let randomWord=randomWords[Math.floor(Math.random()*4)];

var randomInsult="Your "+ randomBodyPart + " like " + randomAdject + " "+ randomWord + "!";

console.log(randomInsult);

// RANDOM INSULT GAME 2

const randomMonths=["January", "February", "March","April", "May", "June", "July", "August", "September", "October",
 "November", "December" ];
const randomDaysOfWeek=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const randomNumbers=[1,2,3,4,5,6,7,8,9,10];

const randomMonth=randomMonths[Math.floor(Math.random()*12)];
const randomDayOfWeek=randomDaysOfWeek[Math.floor(Math.random()*7)];
const randomNumber=randomNumbers[Math.floor(Math.random()*10)];

const randomInsult2=["Your lucky month is",  randomMonth + ",", "your lucky day of the week is ", 
randomDayOfWeek + ",", 
"and ", " your lucky number is ",  randomNumber +"!!!"].join("  ");

console.log(randomInsult2);


// exercise with method .join("");
const numbers=[3, 2, 1].join(" love");

console.log(numbers);

const numbers2=[3, 2, 1].join(" more than");

console.log(numbers2);




