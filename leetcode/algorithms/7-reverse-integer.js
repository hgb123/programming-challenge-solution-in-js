/*
LeetCode > Reverse Integer

Tags: math, string
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const negative = x < 0;
  const reversed =
    (negative ? -1 : 1) * Math.abs(x).toString().split("").reverse().join("");
  const outOfRange =
    reversed < -Math.pow(2, 31) || reversed + 1 > Math.pow(2, 31);
  return outOfRange ? 0 : reversed;
};
