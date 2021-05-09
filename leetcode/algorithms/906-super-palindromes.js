/*
LeetCode > Super Palindromes

Tags: math, string, array
*/

/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
var superpalindromesInRange = function (left, right) {
  [left, right] = [+left, +right];

  const isPalindrome = (s) => s === s.split("").reverse().join("");

  let palindromes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // as range is max of 1e18 => find from sqrt(1e18) = 1e9
  // build palindrome from concatnate: xx, x0x, x1x,...x9x
  // so x must be in range 9/2 = 4
  for (let i = 1; i < 10000; i++) {
    const s1 = String(i) + String(i).split("").reverse().join("");
    palindromes.push(s1);
    for (let j = 0; j < 10; j++) {
      const s2 = String(i) + String(j) + String(i).split("").reverse().join("");
      palindromes.push(s2);
    }
  }

  palindromes = palindromes.map(Number).sort((a, b) => a - b);

  let numberOfSuperPalindromesInRange = 0;

  for (const palindrome of palindromes) {
    const s = String(BigInt(palindrome) ** 2n);
    if (isPalindrome(s) && left <= Number(s) && Number(s) <= right) {
      numberOfSuperPalindromesInRange++;
    }
  }

  return numberOfSuperPalindromesInRange;
};
