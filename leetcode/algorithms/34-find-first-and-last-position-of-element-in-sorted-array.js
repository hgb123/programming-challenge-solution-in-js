/*
LeetCode > Find First and Last Position of Element in Sorted Array

Tags: array, binary search
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const binarySearchLeft = (nums, target) => {
    let [left, right, index] = [0, nums.length - 1, -1];
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      if (nums[mid] === target) {
        index = mid;
      }
    }

    return index;
  };
  const binarySearchRight = (nums, target) => {
    let [left, right, index] = [0, nums.length - 1, -1];
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
      if (nums[mid] === target) {
        index = mid;
      }
    }

    return index;
  };

  return [binarySearchLeft(nums, target), binarySearchRight(nums, target)];
};

var searchRange = function (nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
};
