var n1 = Number(prompt("pls enter n1:"));
var n2 = Number(prompt("pls enter n2:"));
var n3 = Number(prompt("pls enter n3:"));

var sum = n1 + n2 + n3;
var mul = n1 * n2 * n3;

var div;
if (n2 !== 0 && n3 !== 0) {
  div = n1 / n2 / n3;
} else {
  div = "error..not allowed";
}

console.log("Sum = " + sum);
console.log("Multiply = " + mul);
console.log("Division = " + div);
