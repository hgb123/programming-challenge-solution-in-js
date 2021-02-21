/*
LeetCode > Maximum Score from Performing Multiplication Operations

Tags: dynamic programming
*/

function recursion(l, i, nums, muls, memo) {
  if (i === muls.length) {
    return 0;
  }
  if (memo[l][i] != null) {
    return memo[l][i];
  }

  let left = l;
  let right = nums.length - (i - l) - 1;
  let case1 = muls[i] * nums[left] + recursion(l + 1, i + 1, nums, muls, memo);
  let case2 = muls[i] * nums[right] + recursion(l, i + 1, nums, muls, memo);
  memo[l][i] = Math.max(case1, case2);

  return memo[l][i];
}

/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function (nums, multipliers) {
  let memo = Array.from({ length: multipliers.length }, (_) =>
    Array(multipliers.length).fill(null)
  );
  return recursion(0, 0, nums, multipliers, memo);
};
