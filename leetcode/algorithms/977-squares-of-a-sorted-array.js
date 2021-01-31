/*
LeetCode > Squares of a Sorted Array

Tags: array, two pointers
*/

var sortedSquares = function (nums) {
  return nums.map((num) => num * num).sort((a, b) => a - b);
};
