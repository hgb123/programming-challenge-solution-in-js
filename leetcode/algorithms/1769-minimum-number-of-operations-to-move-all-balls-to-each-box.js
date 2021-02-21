/*
LeetCode > Minimum Number of Operations to Move All Balls to Each Box

Tags: array, greedy
*/

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  boxes = boxes.split("").map(Number);
  const ones = boxes
    .map((el, i) => [el, i])
    .filter(([el]) => el === 1)
    .map(([_, i]) => i);

  const res = Array.from({ length: boxes.length }, (_, i) =>
    ones.reduce((acc, oneIdx) => (acc += Math.abs(i - oneIdx)), 0)
  );
  return res;
};
