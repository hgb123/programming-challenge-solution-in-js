/*
LeetCode > Count Nice Pairs in an Array

Tags: array, hash table
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  const getRev = (num) => Number(String(num).split("").reverse().join(""));
  return (
    Array.from(
      nums
        .map((num) => num - getRev(num))
        .reduce((acc, el) => acc.set(el, (acc.get(el) || 0) + 1), new Map())
        .values()
    )
      .filter((x) => x > 1)
      .map((x) => (x * (x - 1)) / 2)
      .reduce((acc, el) => acc + el, 0) %
    (1e9 + 7)
  );
};
