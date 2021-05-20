/*
LeetCode > Binary Tree Level Order Traversal

Tags: tree, bfs
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
 * @return {number[][]}
 */
// tree preorder traversal
var levelOrder = function (root) {
  const res = [];

  const recursion = (node, level = 0) => {
    if (!node) return;

    if (!res[level]) res[level] = [];

    res[level].push(node.val);

    recursion(node.left, level + 1);
    recursion(node.right, level + 1);
  };

  recursion(root, 0);

  return res;
};

// bfs
var levelOrder = function (root) {
  const queue = [];
  const res = [];

  if (!root) return res;

  queue.unshift(root);
  while (queue.length) {
    const currentQueueLength = queue.length;
    const subList = [];
    for (let i = 0; i < currentQueueLength; i++) {
      queue[0].left && queue.push(queue[0].left);
      queue[0].right && queue.push(queue[0].right);
      subList.push(queue.shift().val);
    }
    res.push(subList);
  }

  return res;
};
