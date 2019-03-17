// "const" declares a variable I want to remain constant and unchangeable no matter where it is used. Written in all caps with underscores for spaces.

function printManyTimes(str) {
    "use strict";
  
    // change code below this line
  
    const SENTENCE = str + " is cool!";
    for(let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
    // change code above this line
  
  }
  printManyTimes("freeCodeCamp");