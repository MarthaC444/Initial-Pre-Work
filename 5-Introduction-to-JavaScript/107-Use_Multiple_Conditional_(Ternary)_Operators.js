// I can chain conditional operators together to satisfy an if/else if/else statement.  

function checkSign(num) {
    return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
  }
  
  checkSign(10);