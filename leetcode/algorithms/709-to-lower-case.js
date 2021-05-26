/*
LeetCode > To Lower Case

Tags: string
*/

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  return s.toLowerCase();
};

var toLowerCase = function (s) {
  return s
    .split("")
    .map((c) =>
      "A" <= c && c <= "Z" ? String.fromCharCode(c.charCodeAt(0) + 32) : c
    )
    .join("");
};
