/*
LeetCode > Number of 1 Bits

Tags: bit manipulation
*/

var hammingWeight = function (n) {
  let res = 0;
  while (n) {
    res += n % 2 === 0 ? 0 : 1;
    n = Math.floor(n / 2);
  }
  return res;
};
