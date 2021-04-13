/*
LeetCode > Beautiful Arrangement II

Tags: array
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  const res = [];
  let from = 1;
  let to = k + 1;

  while (from <= to) {
    res.push(from++);
    from <= to && res.push(to--);
  }
  for (let i = k + 2; i <= n; i++) {
    res.push(i);
  }

  return res;
};
