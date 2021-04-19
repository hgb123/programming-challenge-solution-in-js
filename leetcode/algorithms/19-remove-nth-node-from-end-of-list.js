/*
LeetCode > Remove Nth Node From End of List

Tags: linked list, two pointers

Approach:
  two pointers here is to maintain the position
    target el is n dist from tail
    F and S start from head
    first, F will iterate n time
      so F is n dist from head (which is also S)
      aka, S is n dist from F
    then, F and S will both iterate until F reach tail
      because target el is n dist from tail
      and S is n dist from F, so the same
    now S is pointed to target, remove that
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
 * @param {number} n
 * @return {ListNode}
 */
// no fair-play
var removeNthFromEnd = function (head, n) {
  let iter = head;
  let arr = [];
  while (iter) {
    arr.push(iter.val);
    iter = iter.next;
  }
  n = arr.length - n;
  arr.splice(n, 1);
  arr = arr.map((el) => new ListNode(el));
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1];
  }
  return arr[0] || null;
};

var removeNthFromEnd = function (head, n) {
  let fast = (slow = head);
  while (n--) {
    fast = fast.next;
  }
  if (!fast) {
    return head.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};
