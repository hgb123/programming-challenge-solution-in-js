/*
LeetCode > Simplify Path

Tags: string, stack

Approach
  split the task by slash "/"
  sanitize
    remove '.' because it is the current folter
    remove blank because it is redundant
  use stack, if part is '..' the pop the part, else push the part
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
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  path = path
    .split("/")
    .filter(Boolean)
    .filter((part) => part !== ".");

  const stack = new Stack();
  for (const part of path) {
    if (part === "..") {
      stack.pop();
    } else {
      stack.push(part);
    }
  }
  const res = [];
  while (!stack.isEmpty()) {
    res.push(stack.pop());
  }
  res.reverse();
  return "/" + res.join("/");
};
