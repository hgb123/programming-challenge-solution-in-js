/*
LeetCode > Convert Sorted List to Binary Search Tree

Tags: linked list, recursion, dfs
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
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

  const nums = [];
  while (head) {
    nums.push(head.val);
    head = head.next;
  }

  return sortedArrayToBST(nums);
};
