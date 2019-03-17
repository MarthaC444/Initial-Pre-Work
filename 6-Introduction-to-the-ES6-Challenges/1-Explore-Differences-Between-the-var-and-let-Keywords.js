// Declaring with "let" creates an immutable variable within its scope. The value can't be changed elsewhere in the code.

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();