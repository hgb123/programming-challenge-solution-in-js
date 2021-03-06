/*
LeetCode > Average of Levels in Binary Tree

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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const average = (arr) => arr.reduce((acc, el) => acc + el, 0) / arr.length;
  const valuesAtDepth = [];

  const recursion = function (node, depth = 0) {
    if (!node) {
      return;
    }

    if (!valuesAtDepth[depth]) {
      valuesAtDepth[depth] = [];
    }
    valuesAtDepth[depth].push(node.val);
    recursion(node.left, depth + 1);
    recursion(node.right, depth + 1);
  };

  recursion(root);

  return valuesAtDepth.map(average);
};
