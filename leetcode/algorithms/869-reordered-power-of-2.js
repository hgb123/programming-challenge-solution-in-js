/*
LeetCode > Reordered Power of 2

Tags: math
*/

/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function (N) {
  const getDigits = (number) => {
    const digits = Array(10).fill(0);
    while (number) {
      digits[number % 10]++;
      number = Math.floor(number / 10);
    }
    return digits.join("");
  };

  // 0 <= N <= 1e9
  // 0 <= 2^NUMBER_OF_DIGITS <= 1e9
  // 0 <= NUMBER_OF_DIGITS <= 30
  const MAX_NUMBER_OF_DIGITS = Math.ceil(Math.log2(1e9));

  for (let exp = 0; exp <= MAX_NUMBER_OF_DIGITS; exp++) {
    if (getDigits(N) === getDigits(Math.pow(2, exp))) {
      return true;
    }
  }
  return false;
};
