// I don't have to include property values when retrieving them in this function. The property is enough. 

const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return {
      name,
      age,
      gender
    };
    // change code above this line
  };
  console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object