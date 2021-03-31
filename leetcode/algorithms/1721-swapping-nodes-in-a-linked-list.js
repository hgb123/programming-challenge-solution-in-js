/*
LeetCode > Swapping Nodes in a Linked List

Tags: linked list
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let first = head;
  let second = head;
  let temp = head;
  let len = 0;
  while (temp) {
    len++;
    temp = temp.next;
  }
  let firstIndex = k - 1;
  let secondIndex = len - k;
  while (firstIndex--) {
    first = first.next;
  }
  while (secondIndex--) {
    second = second.next;
  }
  let tempVal = first.val;
  first.val = second.val;
  second.val = tempVal;
  return head;
};
