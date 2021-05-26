/*
LeetCode > Evaluate Reverse Polish Notation

Tags: stack
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const s = [];
  let a, b;
  for (const token of tokens) {
    switch (token) {
      case "+": {
        [a, b] = [s.pop(), s.pop()];
        s.push(a + b);
        break;
      }
      case "-": {
        [a, b] = [s.pop(), s.pop()];
        s.push(b - a);
        break;
      }
      case "*": {
        [a, b] = [s.pop(), s.pop()];
        s.push(a * b);
        break;
      }
      case "/": {
        [a, b] = [s.pop(), s.pop()];
        s.push(Math.trunc(b / a));
        break;
      }
      default: {
        s.push(Number(token));
      }
    }
  }
  return s.pop();
};
