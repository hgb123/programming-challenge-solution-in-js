/*
LeetCode > Two Sum

Tags: array, hash table
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const elLastIdxMap = nums.reduce(
    (acc, el, idx) => acc.set(el, idx),
    new Map()
  );
  for (const [idx, num] of nums.entries()) {
    const rest = target - num;
    if (elLastIdxMap.has(rest) && elLastIdxMap.get(rest) !== idx) {
      return [idx, elLastIdxMap.get(rest)];
    }
  }
};
