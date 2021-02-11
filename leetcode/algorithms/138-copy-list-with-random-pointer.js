/*
LeetCode > Copy List with Random Pointer

Tags: linked list, hash table
*/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let newHead;
  let iter;
  let prevIter;

  iter = head;
  while (iter) {
    const node = new Node(iter.val);

    if (prevIter) {
      prevIter.next = node;
    } else {
      newHead = node;
    }

    prevIter = node;
    iter.newRef = node;
    iter = iter.next;
  }

  iter = head;
  while (iter) {
    iter.newRef.random = iter.random?.newRef;
    iter = iter.next;
  }

  return newHead;
};
