/*
LeetCode > Minimum Deletion Cost to Avoid Repeating Letters

Tags: greedy, stack

Approach:
  update the latest local max to calculate the right min
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
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (s, cost) {
  let res = 0,
    prev = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      res += Math.min(cost[prev], cost[i]);
      if (cost[i] > cost[prev]) {
        prev = i;
      }
    } else {
      prev = i;
    }
  }
  return res;
};

var minCost = function (s, cost) {
  const stack = new Stack();
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[stack.peek()] !== s[i]) {
      stack.push(i);
      continue;
    }

    res += Math.min(cost[stack.peek()], cost[i]);
    if (cost[i] > cost[stack.peek()]) {
      stack.pop();
      stack.push(i);
    }
  }
  return res;
};
