/*
LeetCode > Longest Consecutive Sequence

Tags: array, dynamic programming, sorting
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  const memo = {};

  const recursion = (num) => {
    if (memo[num] !== undefined) {
      return memo[num];
    }
    return (memo[num] = set.has(num - 1) ? recursion(num - 1) + 1 : 1);
  };

  return Math.max.apply(null, [...set].map(recursion).concat([0]));
};
