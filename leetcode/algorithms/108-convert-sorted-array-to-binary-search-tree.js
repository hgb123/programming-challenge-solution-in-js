/*
LeetCode > Convert Sorted Array to Binary Search Tree

Tags: tree, recursion, dfs
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }

  const mid = Math.floor(nums.length / 2);
  const node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1));

  return node;
};

var sortedArrayToBST = function (nums) {
  const recursion = (left, right) => {
    if (left > right) {
      return null;
    }

    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = recursion(left, mid - 1);
    node.right = recursion(mid + 1, right);

    return node;
  };

  return recursion(0, nums.length - 1);
};
