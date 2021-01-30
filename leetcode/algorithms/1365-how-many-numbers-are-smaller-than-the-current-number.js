/*
LeetCode > How Many Numbers Are Smaller Than the Current Number

Tags: array
*/

var smallerNumbersThanCurrent = function (nums) {
  const N = nums.length;
  const res = [];
  for (let i = 0; i < N; i++) {
    let count = 0;
    for (let j = 0; j < N; j++) {
      if (i !== j && nums[j] < nums[i]) {
        count++;
      }
    }
    res.push(count);
  }
  return res;
};
