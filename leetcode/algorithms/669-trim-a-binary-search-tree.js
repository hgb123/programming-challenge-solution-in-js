/*
LeetCode > Trim a Binary Search Tree

Tags: tree, recursion
*/

/*
Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

A BST is a BT which every node fit this ordering condition: all left descendents <= n < all right descendents
*/

var trimBST = function (root, low, high) {
  if (!root) return root;
  if (root.val > high) return trimBST(root.left, low, high);
  if (root.val < low) return trimBST(root.right, low, high);

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
};
