/*
LeetCode > Number of Good Pairs

Tags: array
*/

var numIdenticalPairs = function (nums) {
  const N = nums.length;
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
};
