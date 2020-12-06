"use strict";

// exercises with objects
const friends=[
  {name:"Anna", age:21, luckyNumbers:[1,5,11,4,9]},
  {name:"Dave", age: 33, luckyNumbers:[9,5, 4, 7, 6] },
  {name:"Kate", age: 27, luckyNumbers:[4,7, 1, 3, 5] }
];

 console.log(friends[1].luckyNumbers);

 // DEBT program exercise

 const karyz={
    Jimmi:5,
    Anna:3,
    Jacob:10
 };
 karyz.Jimmi+=3; // used operator (+=) 
 console.log(karyz);

 // Movies COLLECTION program

 const movies={
     "Nemo":{
         releaseDate:2003, 
         duration:100,
         actors:["Albert Brooks", "Ellen Dedjeneres", "Alex Gold"],
         format:"DVD"
     },
     "Star War: Episod VI-Djeday is coming back":{
        releaseDate:1983, 
        duration:134,
        actors:["Marc Hamill", "Harrison Ford", "Carry Fisher"],
        format:"DVD"  
     },
     "Harry Potter and Fire Cube":{
        releaseDate:2005, 
        duration:157,
        actors:["Danial Redcliff", "Emma Watson", "Rupert Grint"],
        format:"Blu-ray"
     }

 };
  const findingMovies=movies["Nemo"];

  //console.log(movies["Nemo"]); // or mojno like this console.log(movies.Nemo);

  // DOBAVLYAEM NEW MOVIE TO THE COLLECTION

  const cars={
    releaseDate:2006, 
    duration:117,
    actors:["Danial Redcliff", "Emma Watson", "Rupert Grint"],
    format:"Blu-ray"
  };
   movies["Tachki"]=cars;

   console.log(movies.Tachki);



