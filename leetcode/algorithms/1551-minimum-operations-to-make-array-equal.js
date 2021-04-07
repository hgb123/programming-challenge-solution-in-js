/*
LeetCode > Minimum Operations to Make Array Equal

Tags: math
*/

/**
 * @param {number} n
 * @return {number}
 */
// O(n^2)
var minOperations = function (n) {
  const med = 2 * Math.floor(n / 2) + (n % 2 === 0 ? 0 : 1);
  return (
    Array.from({ length: n }, (_, i) => 2 * i + 1)
      .map((el) => Math.abs(med - el))
      .reduce((acc, el) => acc + el, 0) / 2
  );
};

// O(1)
var minOperations = function (n) {
  return Math.floor(n / 2) * Math.ceil(n / 2);
};
