/*
LeetCode > Form Array by Concatenating Subarrays of Another Array

Tags: array, greedy
*/

const arrayEqual = (a, b) =>
  a.length === b.length && a.every((el, i) => el === b[i]);

/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function (groups, nums) {
  let i = 0;

  groupsLoop: for (const group of groups) {
    for (let j = i; j < nums.length; j++) {
      if (arrayEqual(nums.slice(j, j + group.length), group)) {
        i = j + group.length;
        continue groupsLoop;
      }
    }
    return false;
  }

  return true;
};
