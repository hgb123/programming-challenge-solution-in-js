/*
LeetCode > Binary Tree Cameras

Tags: dynamic programming, tree, dfs
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
 * @return {number}
 */
var minCameraCover = function (root) {
  let res = 0;
  const covered = new Set();
  covered.add(null);

  const dfs = (node, parent) => {
    if (node === null) return;

    dfs(node.left, node);
    dfs(node.right, node);

    if (
      (parent === null && !covered.has(node)) ||
      !covered.has(node.left) ||
      !covered.has(node.right)
    ) {
      res++;
      covered.add(parent);
      covered.add(node);
      covered.add(node.left);
      covered.add(node.right);
    }
  };

  dfs(root, null);

  return res;
};
