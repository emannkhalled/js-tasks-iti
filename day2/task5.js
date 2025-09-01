
var statment = prompt("Pls enter the string");

var sensitivity = confirm("Do you interest case sensitivity?");

if (sensitivity == true) {

} else {
  statment = statment.toLowerCase();
}


for (var i = statment.length - 1; i >= 0; i--) {
  reverse = reverse + statment.charAt(i);
}
var reverse;
if (statment == reverse) {
  console.log("Palindrome ");
} else {
  console.log("Not Palindrome ");
}
