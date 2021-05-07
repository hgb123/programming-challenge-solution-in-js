/*
LeetCode > Jump Game II

Tags: array, greedy, recursion, dynamic programming
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const recursion = (i, memo = {}) => {
    if (memo[i] !== undefined) {
      return memo[i];
    }

    if (i >= nums.length - 1) {
      return 0;
    }

    let minSteps = Infinity;
    for (let step = 1; step <= nums[i]; step++) {
      minSteps = Math.min(minSteps, 1 + recursion(i + step, memo));
    }

    return (memo[i] = minSteps);
  };

  return recursion(0);
};
