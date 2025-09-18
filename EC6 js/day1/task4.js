function findPositive(nums) {
  return nums.filter((num) => num > 0);
}

let nums = [55,-2,-41,14,16,-88,22];
let positiveNums = findPositive(nums);
console.log(positiveNums); 
