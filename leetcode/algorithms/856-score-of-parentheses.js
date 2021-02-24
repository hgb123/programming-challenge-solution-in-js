/*
LeetCode > Score of Parentheses

Tags: string, stack
*/

/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S) {
  const resStack = [0]; // default for empty string

  for (const paren of S) {
    if (paren === "(") {
      resStack.push(0);
    } else if (paren === ")") {
      const top = resStack.pop();
      const res = top > 0 ? top * 2 : 1;
      resStack[resStack.length - 1] += res;
    }
  }

  return resStack.pop();
};
