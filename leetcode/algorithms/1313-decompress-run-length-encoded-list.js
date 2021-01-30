/*
LeetCode > Decompress Run-Length Encoded List

Tags: array
*/

var decompressRLElist = function (nums) {
  const N = nums.length;
  const res = [];
  for (let i = 0; i < N; i += 2) {
    res.push(Array(nums[i]).fill(nums[i + 1]));
  }
  return res.flat();
};
