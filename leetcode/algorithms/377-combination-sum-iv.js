/*
LeetCode > Combination Sum IV

Tags: recursion, dynamic programming
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const recursion = (accumulatedSum, memo = new Map()) => {
    if (memo.has(accumulatedSum)) {
      return memo.get(accumulatedSum);
    }

    if (accumulatedSum > target) {
      return 0;
    }

    if (accumulatedSum === target) {
      return 1;
    }

    let res = 0;
    for (const num of nums) {
      res += recursion(accumulatedSum + num, memo);
    }
    memo.set(accumulatedSum, res);

    return res;
  };

  return recursion(0);
};
