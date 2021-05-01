/*
LeetCode > Powerful Integers

Tags: hash table, math
*/

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  const res = new Set();
  const [X, Y] = [
    x === 1 ? bound : Math.floor(Math.log(bound) / Math.log(x)),
    y === 1 ? bound : Math.floor(Math.log(bound) / Math.log(y)),
  ];

  for (let i = 0; i <= X; i++) {
    for (let j = 0; j <= Y; j++) {
      const val = x ** i + y ** j;
      if (val <= bound) {
        res.add(val);
      }
      // 1^anything will always be 1
      if (y === 1) {
        break;
      }
    }
    // 1^anything will always be 1
    if (x === 1) {
      break;
    }
  }

  return Array.from(res);
};

// dfs
var powerfulIntegers = function (x, y, bound) {
  const res = new Set();
  const visited = new Set();
  const stack = [[0, 0]];

  const getKey = (i, j) => `${i}-${j}`;

  while (stack.length > 0) {
    const [i, j] = stack.pop();

    if (visited.has(getKey(i, j))) {
      continue;
    }

    visited.add(getKey(i, j));
    const val = x ** i + y ** j;

    if (val <= bound) {
      res.add(val);
      x > 1 && stack.push([i + 1, j]);
      y > 1 && stack.push([i, j + 1]);
    }
  }

  return Array.from(res);
};
