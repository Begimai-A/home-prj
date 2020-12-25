"use strict";
// Клонирование массива при помощи метода .slice();

const oldArray=["a", "b", "c",];
const newArray=oldArray.slice();
 newArray[0]= "abc";

 console.log(oldArray);
 console.log(newArray);

 // Клонирование массива при помощи ОПЕРАТОРА SPREAD

 const video=["youtube", "vimeo", "rutube"];
 const blogs=["wordpress", "livejournal", "blogger"];
 const internet=[...video,... blogs, "vk", "facebook"];

console.log(internet);


 const array=[1, 3, 5];
 const array2=[...array];

 console.log(array2);

// Клонирование объекта при помощи оператора SPREAD

 const obj={
     one:1,
     two:2
 };

 const newObj={...obj};

 console.log(newObj);


