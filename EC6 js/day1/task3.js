var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let testString = fruits.every((item) => typeof item === "string");
console.log("The elements are string??:", testString);


let testSome = fruits.some((item) => item.startsWith("a"));
console.log(' The Some elements start with (a)??:', testSome);



let filterd = fruits.filter((item) => item.startsWith("b") || item.startsWith("s"));
console.log("Filtered fruits (b or s):", filterd);


let liked = filterd.map((item) => `I like ${item}`);
console.log("The Liked fruits:", liked);


liked.forEach((item) => console.log(item));
