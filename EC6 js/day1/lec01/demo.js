//agenda
//1. let and const and var
//2. destructuring
//3. spread operator --rest prameters
//4. default Values
//5. Arrow function
//6. String API
//7. Array API
//8. Object Properties
//9.module
//10.oop

//--------------------------------
// 1. let and const and var

/**
 * var
 * 1. reassign
 * 2. redeclare
 * 3. hoisting
 * 4.function scope
 * 5.add window object
 */

//reassign

// var a = 10;
// a = "Ali";
// console.log(a);

//redeclare

// var fname = "Ali";
// var fname = 15;
// console.log(fname);

//hoisting
// var a;
// console.log(a);
// var a = 10;
// console.log(a);

//function scope

// function test() {
//   var trackName = "Angular";
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//     // console.log(trackName);
//   }
//   console.log(i);
//   //   console.log(trackName);
// }
// console.log(trackName);
// test();

//add window object
// var fname = "Ahmed";
// console.log(window.fname);

//----------------------------------
/**
 * 
 * let
 * 1. reassign /---> yes 
 * 2. redeclare ---> not redeclare
 * 3. hoisting ---> no hoisting
 * 4. block scope
 * 5. add window object //no add window
 
 */
// //reassign
// let a = 10;
// a = "Ali";
// console.log(a);

//redeclare
// let fname = "Ali";
// let fname = 15;
// console.log(fname);

//block scope

// function test() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// test();

// let a;
// console.log(a);
// let a = 10;
// console.log(a);

// //add window object
// let fname = "Ahmed";
// console.log(window);

//---------------------------------------
/**
 * 
 * const 
 * 1. reassign /---> no reassign
 * 2. redeclare ---> not redeclare
 * 3. hoisting ---> no hoisting
 * 4. block scope
 * 5. add window object //no add window
 
 */

//reassign not possible
// const PI = 3.14;
// PI = "Ali";
// console.log(PI);

// const arr = [1, 2, 3, 5];
// arr.push(4);
// console.log(arr);

//redeclare not possible
// const fname = "Ali";
// const fname = 15;
// console.log(fname);

//hoisting not possible
// const a;
// console.log(a);
// const a = 10;
// console.log(a);

//not add window object
// const fname = "Ahmed";
// console.log(window);

//======================================================
// 2. destructuring

// let arr = [1, "Ahmed", true];
// a = arr[0];
// b = arr[1];
// c = arr[2];
// console.log(a);
// console.log(b);
// console.log(c);

// let [a, b, c] = [1, "Ahmed", true];
// console.log(a);
// console.log(b);
// console.log(c);

// let [, , c] = ["Ahmed", "Ali", "Osama"];
// console.log(c);

//----------------------------------------------
// let [id, fname, lname] = [1, "Ahmed", "Osama"];
// console.log(id);
// console.log(fname);
// console.log(lname);

//==============================================
// let obj = {
//   id: 1,
//   fname: "Ahmed",
//   lname: "Osama",
//   age: 25,
// };

// // console.log(obj.id);
// // console.log(obj.fname);
// // console.log(obj.lname);

// let { id, fname, lname, age } = obj;
// console.log(id);
// console.log(fname);
// console.log(lname);
// console.log(age);

// let { id, fname, lname, age } = {
//   id: 1,
//   fname: "Ahmed",
//   lname: "Osama",
//   age: 25,
// };
// console.log(id);
// console.log(fname);
// console.log(lname);
// console.log(age);

// let { a, b, c } = { a: 1, b: "Ahmed", c: true };
// console.log(a);
// console.log(b);
// console.log(c);

//-------------------------
// function useState() {
//   return [
//     1,
//     "Ahmed",
//     function (data) {
//       //   console.log({ data });
//       let { id, fname, lname } = data;
//       console.log(id);
//       console.log(fname);
//       console.log(lname);
//     },
//   ];
// }

// var [a, b, c] = useState();

// console.log(a);
// console.log(b);
// c({ id: 1, fname: "Ahmed", lname: "Osama" });

//-------------------------------------------------------
// 3. spread operator --rest prameters

// let arr1 = ["ali", 2, true];
// let arr2 = arr1;

// arr1.push("Ahmed");
// console.log(arr1);
// console.log(arr2);

// let arr1 = ["ali", 2, true];
// let arr2 = [];

// for (let i = 0; i < arr1.length; i++) {
//   arr2[i] = arr1[i];
// }
// arr1.push("Ahmed");
// console.log(arr1);
// console.log(arr2);

// let arr1 = ["ali", 2, true, "Osama"];
// let arr2 = [50, ...arr1, "mohamed"];
// arr2.push(false);
// console.log(arr1);
// console.log(arr2);

// let obj1 = {
//   id: 1,
//   fname: "Ahmed",
//   lname: "Osama",
//   age: 60,
// };

// let obj2 = {
//   ...obj1,
//   age: 25,
// };

// let { id, fname, lname } = obj1;
// console.log(id);
// console.log(fname);
// console.log(lname);

// console.log(obj1);
// console.log(obj2);

//----------------------------------

// const numbers = [20, 95, 42, 35, 76];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

//=========================================
//rest prameters

// function test(x, y, ...rest) {
//   //   console.log(arguments);
//   console.log(x);
//   console.log(y);
//   console.log(rest);
// }

// test(20, 60, 90, 200, 500, 800);

// function Add(x, y, ...rest) {
//   let sum = x + y;
//   for (let i = 0; i < rest.length; i++) {
//     sum += rest[i];
//   }
//   console.log(sum);
// }

// Add(20, 60, 500, 1000, 220);

//=========================================
//sring API

// let fname = "Ahmed";

// console.log(fname.length);
// console.log(fname.charAt(1));
// console.log(fname.indexOf("A"));
// console.log(fname.slice(1, 4));
// let newFname = fname.replace("A", "a");
// console.log(fname);
// console.log(newFname);

// console.log(fname.toUpperCase());
// console.log(fname.toLowerCase());
// console.log(fname.split(""));
// console.log(fname.startsWith("A"));
// console.log(fname.endsWith("d"));

// console.log("Welcome Iti " + fname);
// console.log(`Welcome
//     svsdmklsdm
//     sdmsdlfsd;l ${fname}

//     Iti ${fname}`);

//=============================================

// statement Function
// function test() {
//   console.log("test");
// }

// test();

//expression Function
// let test = function () {
//   console.log("test");
// };

// test();

//arrow Function

// let test = () => {
//   console.log("test");
// };

// test();

// let sum = (x, y) => x + y;
// console.log(sum(10, 20));

//============================================
// let myValue = "Ahmed";
// let mycolor = "color";
// let person = {
//   fname: myValue,
//   age: 25,
//   [mycolor]: "red",
// };

// console.log(person);

//=============================================
//Array API

// let arr = [20, 10, 40, 30, 50, 101, 11];

// arr.push(60);
// arr.pop();
// arr.shift();
// arr.unshift(5);
// arr.splice(2, 3);
// arr.reverse();
// arr.sort((a, b) => a - b);

// let result = arr.filter((item, index) => item <= 20);
// console.log(result);

// let trackName = ["php", "dotnet", "mern", "os"];

// let result = trackName.map((item, index) => {
//   return `welcome to ${item} track`;
// });

// let result = trackName.map((item, index) => {
//   return {
//     id: index + 1,
//     name: item.toLocaleUpperCase(),
//   };
// });

// console.log(result);

// let arr = [10, 20, 30];

// let result = arr.reduce((acc, item, index) => {
//   return acc + item;
// }, 0);
// console.log(result);

// let arr = [10, 20, 30];

// console.log(arr.every((item) => item >= 10));
// console.log(arr.some((item) => item >30));
// console.log(arr.includes(40));

//=======================================
// products = [
//   {
//     id: 1,
//     name: "Book",
//     price: 10,
//     category: "school",
//   },
//   {
//     id: 2,
//     name: "pen",
//     price: 10,
//     category: "school",
//   },
//   {
//     id: 3,
//     name: "pencil",
//     price: 10,
//     category: "school",
//   },
//   {
//     id: 4,
//     name: "phone",
//     price: 1000,
//     category: "electronics",
//   },
//   {
//     id: 5,
//     name: "tv",
//     price: 1000,
//     category: "electronics",
//   },
// ];

// let result = products.filter((item) => item.category == "electronics");
// console.log(result);

//====================================
// let trackName = ["php", "dotnet", "mern", "os"];

// trackName.forEach((item, index) => {
//   console.log(`welcome to ${item} track`);
// });

//===========================================
// module
import { Add, sayHello, trakName } from "./main.js";

Add(10, 120, 30, 40, 50);
Add(10, 120);
sayHello();
console.log(trakName);
