/*
LeetCode > N-ary Tree Preorder Traversal

Tags: tree
*/

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  const res = [];

  const traverse = (node) => {
    if (!node) return;

    res.push(node.val);
    node.children.forEach(traverse);
  };

  traverse(root);

  return res;
};
