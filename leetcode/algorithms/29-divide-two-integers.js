/*
LeetCode > Divide Two Integers

Tags: math, bit manipulation

Approach:
  use log identities (easy to understand)
    log(a/b) = log(c)
    => log(a) - log(b) = log(c)
    => e^(log(a) - log(b)) = c
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const MIN_INT = -Math.pow(2, 31);
  const MAX_INT = Math.pow(2, 31) - 1;
  const sign = (dividend > 0) ^ (divisor > 0) ? -1 : 1;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let res = Math.floor(Math.exp(Math.log(dividend) - Math.log(divisor)));
  res *= sign;
  res = Math.min(res, MAX_INT);
  res = Math.max(res, MIN_INT);

  return res;
};
