/*
LeetCode > 3Sum

Tags: array, two pointers
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const N = nums.length;
  const res = new Set();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < N - 2; i++) {
    let j = i + 1;
    let k = N - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.add([nums[i], nums[j], nums[k]].join("|"));
        j++;
        k--;
      } else if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      }
    }
  }
  return Array.from(res.values()).map((triplet) =>
    triplet.split("|").map(Number)
  );
};
