/*
LeetCode > Find Numbers with Even Number of Digits

Tags: array
*/

var findNumbers = function (nums) {
  return nums.filter((num) => String(num).length % 2 === 0).length;
};
