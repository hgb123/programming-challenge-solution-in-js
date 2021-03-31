/*
LeetCode > Integer to Roman

Tags: string, math
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const dict = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let res = "";
  for (const [key, value] of Object.entries(dict).reverse()) {
    res += key.repeat(Math.floor(num / value));
    num %= value;
  }

  return res;
};
