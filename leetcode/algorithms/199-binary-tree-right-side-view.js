/*
LeetCode > Binary Tree Right Side View

Tags: tree, recursion

Approach:
  priority from right to left
  keep track of the current depth to check if node is viewed
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = [];
  const view = function (node, depth) {
    if (!node) return;
    if (depth === res.length) {
      res.push(node.val);
    }
    view(node.right, depth + 1);
    view(node.left, depth + 1);
  };
  view(root, 0);
  return res;
};
