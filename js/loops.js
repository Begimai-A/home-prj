"use strict";

let name="Zamira";

if ( name==="Begimai"){
    console.log("Hello to me!");

} else if (name=="Nadyrbek"){

    console.log("Hello daddy!");

} else if (name==="Zamira") {

    console.log("Hello mommy!");
} else {
   
    console.log("Hello foreigner!");
} 

// While loop

let sheepCounted=0;

while (sheepCounted<10){
    console.log("Number counted is equal to"+sheepCounted + "!");
    sheepCounted++;
}
console.log("pshhhh");

// FOR LOOP

let animals=["lion", "zebra", "kangaroo"];

for ( let i=0; i<animals.length; i++){
    console.log("In our zoo there are " +animals[i]);
}

// The same can be done with the elements(letters) of word

let myname ="Nik";

for ( let i=0; i<myname.length; i++) {
    console.log("In my name there is letter "+ myname[i]);
}

//  написать программу которая печатает все степени 3 не превышающие 10 000


 for (let i=3; i<10000; i=i*3) {
     console.log(i);
 }

 // the same with while loop

 let number=3;
 while ( number<10000){
     console.log(number);
     number=number*3;
 }



