/*
LeetCode > Partition List

Tags: linked list, two pointers
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
 * @param {number} x
 * @return {ListNode}
 */
// not fair way
var partition = function (head, x) {
  const arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  const nodes = [
    ...arr.filter((el) => el < x),
    ...arr.filter((el) => el >= x),
  ].map((el) => new ListNode(el));

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  return nodes[0] || null;
};

var partition = function (head, x) {
  let [dummy1, dummy2] = [new ListNode(0), new ListNode(0)];
  let [newHead1, newHead2] = [dummy1, dummy2];
  while (head) {
    if (head.val < x) {
      dummy1 = dummy1.next = head;
    } else {
      dummy2 = dummy2.next = head;
    }
    head = head.next;
  }
  dummy2.next = null; // avoid cyclic
  dummy1.next = newHead2.next;
  newHead1 = newHead1.next;
  return newHead1;
};
