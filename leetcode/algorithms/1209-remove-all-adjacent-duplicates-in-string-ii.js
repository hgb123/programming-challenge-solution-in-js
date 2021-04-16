/*
LeetCode > Remove All Adjacent Duplicates in String II

Tags: stack
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      stack.push(1);
    } else {
      stack[stack.length - 1]++;
      if (stack[stack.length - 1] === k) {
        stack.pop();
        s = s.substring(0, i - k + 1) + s.substring(i + 1);
        i -= k;
      }
    }
  }
  return s;
};
