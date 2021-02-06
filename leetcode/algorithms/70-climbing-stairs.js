/*
LeetCode > Climbing Stairs

Tags: recursion, dynamic programming
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, memo = {}) {
  if (n < 0) {
    return 0;
  } else if (n <= 1) {
    return 1;
  } else {
    if (memo[n]) {
      return memo[n];
    }
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
  }
};
