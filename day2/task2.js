
var num = prompt("pls enter n:");
function guess(n) {
  if (num % 3 == 0) {
      return "fizz";
  } else if (n % 5 == 0) {
             return "buzz"; 
  } else if (n % 3 == 0 && n % 5 == 0) {
          return "fizz buzz"; 
  } else {
    return "none";        
  }
}
 var result =  guess(num) ;
 console.log(result );
