/*
LeetCode > XOR Operation in an Array

Tags: array, bit manipulation
*/

var xorOperation = function (n, start) {
  return Array(n)
    .fill(null)
    .reduce((acc, _, i) => acc ^ (start + 2 * i), 0);
};
