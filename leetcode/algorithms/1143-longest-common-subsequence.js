/*
LeetCode > Longest Common Subsequence

Tags: recursion, dynamic programming
*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

var recursion = function (text1, text2, i, j, memo) {
  if (memo[i][j] !== null) {
    return memo[i][j];
  }

  if (i === 0 || j === 0) {
    memo[i][j] = 0;
  } else if (text1[i - 1] === text2[j - 1]) {
    memo[i][j] = 1 + recursion(text1, text2, i - 1, j - 1, memo);
  } else {
    memo[i][j] = Math.max(
      recursion(text1, text2, i, j - 1, memo),
      recursion(text1, text2, i - 1, j, memo)
    );
  }

  return memo[i][j];
};

var longestCommonSubsequence = function (text1, text2) {
  const memo = Array.from({ length: text1.length + 1 }, (_, __) =>
    Array(text2.length + 1).fill(null)
  );
  return recursion(text1, text2, text1.length, text2.length, memo);
};
