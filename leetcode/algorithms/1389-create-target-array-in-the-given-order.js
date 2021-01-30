/*
LeetCode > Create Target Array in the Given Order

Tags: array
*/

var createTargetArray = function (nums, index) {
  const N = nums.length;
  let res = Array(N).fill(null);
  for (let i = 0; i < N; i++) {
    if (res[index[i]] == null) {
      res[index[i]] = nums[i];
    } else {
      res = [res.slice(0, index[i]), nums[i], res.slice(index[i])].flat();
    }
  }
  return res.filter((x) => x !== null);
};
