/*
LeetCode > Letter Combinations of a Phone Number

Tags: string, backtracking, dfs, recursion
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const digitChars = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];

  const recursion = (message, digitIndex) => {
    if (digitIndex === digits.length) {
      res.push(message);
      return;
    }

    for (const c of digitChars[digits[digitIndex]]) {
      recursion(message + c, digitIndex + 1);
    }
  };

  recursion("", 0);

  return res.filter(Boolean);
};
