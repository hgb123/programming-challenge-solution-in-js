/*
LeetCode > Flatten Binary Tree to Linked List

Tags: tree
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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let iter = root;
  while (iter) {
    if (iter.left) {
      let last = iter.left;
      while (last.right) last = last.right;
      last.right = iter.right;
      iter.right = iter.left;
      iter.left = null;
    }
    iter = iter.right;
  }
};
