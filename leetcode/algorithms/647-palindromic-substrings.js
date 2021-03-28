/*
LeetCode > Palindromic Substrings

Tags: string, dynamic programming

Approach:
  memoized palindrome range check
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const N = s.length;
  const mem = Array.from({ length: N }, (_) => Array(N).fill(null));

  const isPalindrome = (i, j) => {
    if (mem[i][j] !== null) {
      return mem[i][j];
    }

    if (i >= j) {
      return (mem[i][j] = 1);
    }

    if (s[i] !== s[j]) {
      return (mem[i][j] = 0);
    }

    return (mem[i][j] = isPalindrome(i + 1, j - 1));
  };

  let res = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      res += isPalindrome(i, j) ? 1 : 0;
    }
  }

  return res;
};
