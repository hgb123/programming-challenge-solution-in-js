/*
LeetCode > Shuffle the Array

Tags: array
*/

var shuffle = function (nums, n) {
  const [firstHalf, secondHalf] = [nums.slice(0, n), nums.slice(n)];
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(firstHalf[i]);
    res.push(secondHalf[i]);
  }
  return res;
};
