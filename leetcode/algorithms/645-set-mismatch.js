/*
LeetCode > Set Mismatch

Tags: hash table, math
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const N = nums.length;
  const occurrences = Array.from({ length: N }, (_, i) => [i + 1, 0]);

  nums.forEach((num) => occurrences[num - 1][1]++);
  return [
    occurrences.filter((occ) => occ[1] === 2)[0][0],
    occurrences.filter((occ) => occ[1] === 0)[0][0],
  ];
};
