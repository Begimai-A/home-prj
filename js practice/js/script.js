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
