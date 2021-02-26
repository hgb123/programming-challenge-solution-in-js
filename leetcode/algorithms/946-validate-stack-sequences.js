/*
LeetCode > Validate Stack Sequences

Tags: stack, greedy

Approach:
  push value to stack
  along with that, keep pop stack if its top is equal to the first element of the popped array (also shift the popped array in that case)
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
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const N = pushed.length;
  const stack = new Stack();
  let i = 0;
  let j = 0;
  while (i < N) {
    stack.push(pushed[i++]);
    while (stack.peek() === popped[j] && j < N) {
      stack.pop();
      j++;
    }
  }

  return stack.isEmpty();
};
