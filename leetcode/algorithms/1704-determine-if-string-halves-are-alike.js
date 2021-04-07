/*
LeetCode > Determine if String Halves Are Alike

Tags: string
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const regex = new RegExp("[^aeiou]", "gi");
  const N = s.length;
  return (
    [s.substring(0, N / 2), s.substring(N / 2)]
      .map((sub) => sub.replace(regex, ""))
      .map((sub) => sub.length)
      .reduce((acc, subLen) => acc.add(subLen), new Set()).size === 1
  );
};
