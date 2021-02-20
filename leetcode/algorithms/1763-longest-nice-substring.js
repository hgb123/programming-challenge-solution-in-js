/*
LeetCode > Longest Nice Substring

Tags: string

Approach: brute-force
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  s = s.split("");
  const N = s.length;
  let max = "";

  for (let i = 0; i < N - 1; i++) {
    let substr = [s[i]];

    for (let j = i + 1; j < N; j++) {
      substr.push(s[j]);
      let isNice = true;

      for (const c of substr) {
        if (
          !substr.includes(c.toLowerCase()) ||
          !substr.includes(c.toUpperCase())
        ) {
          isNice = false;
        }
      }

      if (isNice && substr.join("").length > max.length) {
        max = substr.join("");
      }
    }
  }

  return max;
};
