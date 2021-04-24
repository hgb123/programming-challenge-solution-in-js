/*
LeetCode > Count Binary Substrings

Tags: string

Approach
  group and count contiguous 0s/1s
    "00110011"
    => [2, 2, 2, 2]

  sum of the minimum adjacent pairs
    [2, 2, 2, 2]
    => 2 + 2 + 2 = 6
*/

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  // group and count contiguous 0s/1s
  const groups = [1];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      groups[groups.length - 1]++;
    } else {
      groups.push(1);
    }
  }

  // sum of the minimum adjacent
  let res = 0;
  for (let i = 0; i < groups.length - 1; i++) {
    res += Math.min(groups[i], groups[i + 1]);
  }

  return res;
};
