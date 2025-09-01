var nums = [];   
var input;

for (var i = 0; i < 5; i++) {
  do {
    input = prompt("Enter number " + (i + 1) + ":");
  } while (input == null || isNaN(input));
  
  nums[i] = Number(input);
}

console.log("You entered values: " + nums);

function asc(a, b) {
  return a - b;
}

function desc(a, b) {
  return b - a;
}

var asc1 = nums.slice();   
var desc1 = nums.slice();  

asc1.sort(asc);
desc1.sort(desc);

console.log("Ascending order: " + asc1);
console.log("Descending order: " + desc1);