const filterLength = (arr, len) => arr.filter((str) => str.length > len);

let fruits = ["apple", "strawberry", "banana", "orange", "mango"];
let res = filterLength(fruits, 5);
console.log(res); 