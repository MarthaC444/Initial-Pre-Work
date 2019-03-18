// The rest operator can be used in a function to allow for the use of variable number of arguments.

const sum = (function() {
    "use strict";
    return function sum(...args) {
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3)); // 6