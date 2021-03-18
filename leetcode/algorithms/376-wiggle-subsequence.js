/*
LeetCode > Wiggle Subsequence

Tags: greedy, dynamic programming
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// greedy
var wiggleMaxLength = function (nums) {
  const N = nums.length;
  let res = 1;
  let pos = {
    peak: false,
    valley: false,
  };
  for (let i = 1; i < N; i++) {
    if (nums[i] > nums[i - 1] && !pos.peak) {
      pos.valley = false;
      pos.peak = true;
      res += 1;
    }
    if (nums[i] < nums[i - 1] && !pos.valley) {
      pos.valley = true;
      pos.peak = false;
      res += 1;
    }
  }
  return res;
};

// dynamic programming
var wiggleMaxLength = function (nums) {
  const N = nums.length;
  const up = Array(N).fill();
  const down = Array(N).fill();
  up[0] = 1;
  down[0] = 1;
  for (let i = 1; i < N; i++) {
    if (nums[i] > nums[i - 1]) {
      up[i] = down[i - 1] + 1;
      down[i] = down[i - 1];
    } else if (nums[i] < nums[i - 1]) {
      up[i] = up[i - 1];
      down[i] = up[i - 1] + 1;
    } else {
      up[i] = up[i - 1];
      down[i] = down[i - 1];
    }
  }
  return Math.max(up[N - 1], down[N - 1]);
};
