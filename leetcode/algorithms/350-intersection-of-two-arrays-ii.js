/*
LeetCode > Intersection of Two Arrays II

Tags: hash table, two pointers, binary search, sort
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const getElOccMap = (arr) =>
    arr.reduce((acc, el) => acc.set(el, (acc.get(el) || 0) + 1), new Map());
  const map1 = getElOccMap(nums1);
  const map2 = getElOccMap(nums2);
  const res = [];
  for (const [el, occ] of map1) {
    if (map2.has(el)) {
      res.push(Array(Math.min(occ, map2.get(el))).fill(el));
    }
  }
  return res.flat();
};
