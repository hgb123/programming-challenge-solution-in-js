/*
LeetCode > Minimum Number of Swaps to Make the Binary String Alternating

Tags: greedy
*/

/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  const N = s.length;
  const count = (s, c) => s.split("").filter((_c) => _c === c).length;
  const [count1, count0] = [count(s, "1"), count(s, "0")];
  const valid = Math.abs(count1 - count0) <= 1;

  if (!valid) {
    return -1;
  }

  const calculateSwaps = (s, nextMatch) => {
    let swaps = 0;
    for (const c of s) {
      if (c !== nextMatch) {
        swaps++;
      }
      nextMatch = nextMatch === "1" ? "0" : "1";
    }
    return swaps >> 1;
  };

  if (count1 > count0) {
    return calculateSwaps(s, "1");
  } else if (count0 > count1) {
    return calculateSwaps(s, "0");
  } else {
    return Math.min(calculateSwaps(s, "1"), calculateSwaps(s, "0"));
  }
};
