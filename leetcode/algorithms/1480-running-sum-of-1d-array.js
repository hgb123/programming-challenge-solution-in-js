/*
LeetCode > Running Sum of 1d Array

Tags: array
*/

var runningSum = function (nums) {
  const prefixSums = [];
  let sum = 0;
  for (const num of nums) {
    sum += num;
    prefixSums.push(sum);
  }
  return prefixSums;
};
