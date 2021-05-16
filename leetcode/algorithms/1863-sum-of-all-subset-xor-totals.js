/*
LeetCode > Sum of All Subset XOR Totals

Tags: backtracking, recursion
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let res = 0;
  const N = nums.length;

  const recursion = (currentIndex, sum) => {
    res += sum;
    for (let i = currentIndex; i < N; i++) {
      sum ^= nums[i];
      recursion(i + 1, sum);
      sum ^= nums[i];
    }
  };

  recursion(0, 0);

  return res;
};
