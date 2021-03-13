/*
LeetCode > Binary Trees With Factors

Tags: recursion, dynamic programming

Approach:
  multiplying as result of combination
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  const set = new Set(arr);
  const memo = new Map();
  const recursion = (el) => {
    if (memo.has(el)) {
      return memo.get(el);
    }
    let count = 1;
    for (const otherEl of arr) {
      if (el % otherEl === 0 && set.has(el / otherEl)) {
        count += recursion(otherEl) * recursion(el / otherEl);
      }
    }
    memo.set(el, count);
    return count;
  };

  return arr.reduce((acc, el) => (acc += recursion(el)), 0) % (1e9 + 7);
};
