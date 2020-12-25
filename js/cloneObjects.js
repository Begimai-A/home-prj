"use strict";

let a=5;
    b=a; // является копией переменного и сколько не меняй, от этого исходник не меняется.

b+=5;
     
     console.log(a);
     console.log(b);



const test={ // ссылка на объект, так как является объектом. Поменяв значение одной, меняется значение исходника 
            // так как объекты не копируются, а ссылаются..ПЕРЕДАЧА ПО ССЫЛКЕ
    a: 5,
    b: 2 
};

const testCopy=test;
testCopy.a+=5;

console.log(test);
console.log(testCopy);

// УЧИМСЯ СОЗДАВАТЬ КОПИЮ ОБЪЕКТА С ПОМОЩЬЮ ЦИКЛА И ФУНКЦИИ

function copy (mainObj) {
    let objCopy={};
    for (let key in mainObj) {
        objCopy[key]=mainObj[key];
    }

    return objCopy;
}

const num={
    a: 2,
    b: 4,
    c: {
        d: 3
    }
};

const newNum= copy(num);
newNum.a+=2;

console.log(num);
console.log(newNum); //ПОВЕРХНОСТНОЕ КЛОНИРОВАНИЕ ОБЪЕКТОВ НЕ РАБОТАЕТ С ВЛОЖЕННЫМИ ОБЪЕКТАМИ!!!!!!!!!

// ОБЪЕДИНЕИЕ ОБЪЕКТОВ!!! OBJECT ASSIGN

const numbers={
    a: 2,
    b: 4,
    c: {
        d: 3
    }
};

const addNumbers={
    e:4,
    f: 9
    
};

console.log(Object.assign(numbers, addNumbers));


// СОЗДАНИЕ НОВОГО ОБЪЕКТА ПРИ ПОМОЩИ КЛОНИРОВАНИЯ
const addNumbers2={
    e:4,
    f: 9
    
};

const clone=Object.assign({}, addNumbers2);
clone.e=20;

console.log(addNumbers2);
console.log(clone);



