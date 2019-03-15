// Switch statement tests a value that can have many possible values. "Break" stops the execution of code in a case otherwise the next case statement will be tested and executed if matched.

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch(val) {
      case 1: 
      answer = "alpha";
      break;
      case 2: 
      answer = "beta";
      break;
      case 3: 
      answer = "gamma";
      break;
      case 4: 
      answer = "delta";
      break;
    }
    
    
    // Only change code above this line  
    return answer;  
  }
  
  // Change this value to test
  caseInSwitch(1);
  