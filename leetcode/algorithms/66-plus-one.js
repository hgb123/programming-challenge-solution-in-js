/*
LeetCode > Plus One

Tags: array
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let mem = 0;
  digits = digits.reverse().map((digit, i) => {
    digit += mem + (i === 0 ? 1 : 0);
    if (digit > 9) {
      mem = 1;
      digit = 0;
    } else {
      mem = 0;
    }
    return digit;
  });
  if (mem === 1) {
    digits.push(1);
  }
  return digits.reverse();
};
