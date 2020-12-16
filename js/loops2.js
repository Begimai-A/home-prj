"use strict";

let animals=["cat", "fish","dog", "rabbit"];

for ( let i=0; i<animals.length; i++) {
    console.log( animals[i] + " is an awesome animal" + "," );

}


var abc = "abcdefghijklmnopqrstuvwxyz";
        var rs = "";
        while (rs.length < 6) {
            rs += abc[Math.floor(Math.random() * abc.length)];
        }
        console.log(rs);

// h4ck3r sp34k / HACKER SPEAK

let input="javascript is awesome";
let output="";

for( let i=0; i<input.length; i++) {
    if (input[i]==="a") {
        output+=4;
    } else if (input[i]==="e"){
        output+=3;
    }else if (input[i]==="o"){
        output+=0;
    }else if  (input[i]==="i"){
        output+=1;
    } else {
        output+=input[i];
    }
}
console.log(output);





