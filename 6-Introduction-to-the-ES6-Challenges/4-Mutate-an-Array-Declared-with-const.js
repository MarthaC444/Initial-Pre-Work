// In this lesson I learned that const is not really unchangeable. It just can't be reassigned a whole new array or object. I can still change (mutate) the parts of the array or object.

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();