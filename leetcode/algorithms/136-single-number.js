/*
LeetCode > Single Number

Tags: hash table, bit manipulation
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const numOccMap = nums.reduce(
    (acc, el) => acc.set(el, (acc.get(el) || 0) + 1),
    new Map()
  );
  for (const [num, occ] of numOccMap) {
    if (occ === 1) {
      return num;
    }
  }
};
