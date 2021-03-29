/*
LeetCode > Reconstruct Original Digits from English

Tags: math
*/

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  const counter = s
    .split("")
    .reduce((acc, c) => acc.set(c, (acc.get(c) || 0) + 1), new Map());
  const digitLiterals = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const frequencies = Array(10).fill(0);

  for (const [uniqueChar, digit] of [
    ["z", 0],
    ["w", 2],
    ["u", 4],
    ["x", 6],
    ["g", 8],
    ["s", 7],
    ["f", 5],
    ["o", 1],
    ["h", 3],
    ["i", 9],
  ]) {
    const frequency = counter.get(uniqueChar) || 0;
    frequencies[digit] += frequency;
    for (const char of digitLiterals[digit]) {
      counter.set(char, (counter.get(char) || 0) - frequency);
      if (counter.get(char) && counter.get(char) <= 0) {
        counter.delete(char);
      }
    }
  }

  return frequencies
    .map((frequency, digit) => String(digit).repeat(frequency))
    .filter(Boolean)
    .join("");
};
