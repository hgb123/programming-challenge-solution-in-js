/*
LeetCode > Max Consecutive Ones

Tags: array
*/

var findMaxConsecutiveOnes = function (nums) {
  return Math.max.apply(
    null,
    nums
      .join("")
      .split("0")
      .map((oneS) => oneS.length)
  );
};
