/*
LeetCode > Minimum Remove to Make Valid Parentheses

Tags: string, stack
*/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const parens = s
    .split("")
    .map((el, i) => [el, i])
    .filter((el) => "()".includes(el[0]));

  const stack = [];
  for (const paren of parens) {
    if (stack.length === 0) {
      stack.push(paren);
      continue;
    }
    if (paren[0] === ")" && stack[stack.length - 1][0] == "(") {
      stack.pop();
      continue;
    }
    stack.push(paren);
  }

  const set = new Set(stack.map(([, i]) => i));
  return s
    .split("")
    .map((el, i) => (set.has(i) ? "" : el))
    .join("");
};
