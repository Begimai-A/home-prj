"use strict";
 
const options={
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
        border: "black",
        bg: "yellow"
  }
 };

for (let key in options) {
    if (typeof (options[key]) === "object"){
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key] [i]}` );
        }
    }else{
        console.log (`Свойство ${key} имеет значение ${options[key]}` );
    }   
}

// chtoby uznat length of the object

console.log (Object.keys(options));
console.log(Object.keys(options).length);

// One more example to practise objects

const  classroom={
    table: 4,
    chairs: 7,
    flowers: 3,
    curtains: "yellow",
    books:{
        math:2,
        geometry:1
    }

};

const {math, geometry}=classroom.books; //  Деструктуризация объекта
console.log(geometry); //  Деструктуризация объекта

 for (let key in classroom) {
     if (typeof(classroom[key])==="object") {
         for (let i in classroom[key]){
             console.log(`In the classroom there are ${i}: ${classroom[key][i]} `);
         }

     }else {
        console.log(`In the classroom there are ${key}: ${classroom[key]} `);

     }
 }

 console.log(Object.keys(classroom));
 console.log(Object.keys(classroom).length);



