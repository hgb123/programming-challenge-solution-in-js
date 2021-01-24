var findKthLargest = function (nums, k) {
  const s = nums.sort((a, b) => b - a);
  return s[k - 1];
};
