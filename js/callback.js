"use strict";
function doHomework( subject, callback) {
    console.log(`I am studying ${subject} homework.`);
    callback();
}

doHomework("math", function(){
    console.log ("I finished studying");
});

// callback function example 2

function activity (subj, callback) {
    console.log(`I studied ${subj} very well`);
    callback();
}

activity("chemistry", function(){
    console.log("That's why I passed the exam");
});
