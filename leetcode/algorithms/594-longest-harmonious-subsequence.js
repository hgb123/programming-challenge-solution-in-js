/*
LeetCode > Longest Harmonious Subsequence

Tags: hash table

Approach:
  as the sequence only the max and the min whose diff is 1
  use the hash table for element and its occurence
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const elOccMap = nums.reduce(
    (acc, el) => acc.set(el, (acc.get(el) || 0) + 1),
    new Map()
  );
  let max = 0;
  for (const [el, occ] of elOccMap) {
    if (elOccMap.get(el + 1)) {
      max = Math.max(max, occ + elOccMap.get(el + 1));
    }
  }
  return max;
};
