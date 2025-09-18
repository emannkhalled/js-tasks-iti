function sum(nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}


let nums = [50,30,20,44];
let res = sum(nums);
console.log(res); 
