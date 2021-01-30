/*
HackerRank > Insert a node at a specific position in a linked list
*/

function insertNodeAtPosition(head, data, position) {
  let i = 0;
  const node = new SinglyLinkedListNode(data);
  let iter = head;
  while (i++ < position - 1) {
    iter = iter.next;
  }
  node.next = iter.next;
  iter.next = node;
  return head;
}
