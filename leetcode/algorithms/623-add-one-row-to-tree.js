/*
LeetCode > Add One Row to Tree

Tags: tree, recursion
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function (root, v, d) {
  if (d === 1) {
    return new TreeNode(v, root);
  }

  const recursion = function (node, depth = 1) {
    if (!node) {
      return;
    }

    if (depth === d - 1) {
      node.left = new TreeNode(v, node.left, undefined);
      node.right = new TreeNode(v, undefined, node.right);
      return;
    }

    recursion(node.left, depth + 1);
    recursion(node.right, depth + 1);
  };

  recursion(root, 1);

  return root;
};
