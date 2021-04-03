/*
LeetCode > Longest Valid Parentheses

Tags: string, dynamic programming, stack

Approach: highlight valid parentheses and find max length
*/

function Stack() {
  const stack = [];

  this.push = function (el) {
    stack.push(el);
  };

  this.pop = function () {
    return stack.pop();
  };

  this.peek = function () {
    return stack[stack.length - 1];
  };

  this.isEmpty = function () {
    return stack.length === 0;
  };
}

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const stack = new Stack();
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")" && s[stack.peek()] === "(") {
      s[stack.peek()] = s[i] = "*";
      stack.pop();
    }
  }
  return Math.max.apply(
    null,
    s
      .join("")
      .split(/[\(\)]/g)
      .filter(Boolean)
      .map((sub) => sub.length)
      .concat(0)
  );
};
