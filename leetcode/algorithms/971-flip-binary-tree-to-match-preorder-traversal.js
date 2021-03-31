/*
LeetCode > Flip Binary Tree To Match Preorder Traversal

Tags: tree, dfs
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
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function (root, voyage) {
  const res = [];
  let pos = 0;

  const traverse = (node) => {
    if (node === null) {
      return true;
    }
    if (node.val !== voyage[pos++]) {
      return false;
    }
    if (node.left !== null && node.left.val !== voyage[pos]) {
      res.push(node.val);
      return traverse(node.right) && traverse(node.left);
    }
    return traverse(node.left) && traverse(node.right);
  };

  return traverse(root) ? res : [-1];
};
