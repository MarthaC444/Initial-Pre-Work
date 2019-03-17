// Declaring a variable with "let" only allows one variable by that name. Value cannot be changed elsewhere in the code.

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();