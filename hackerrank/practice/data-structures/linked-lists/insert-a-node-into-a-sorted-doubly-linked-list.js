/*
HackerRank > Inserting a Node Into a Sorted Doubly Linked List
*/

function sortedInsert(head, data) {
  const node = new DoublyLinkedListNode(data);
  let iter = head;
  while (1) {
    if (!iter.next || iter.data >= node.data) {
      break;
    }
    iter = iter.next;
  }

  if (!(iter.data >= node.data) && !iter.next) {
    iter.next = node;
    node.prev = iter;
  } else {
    node.next = iter;
    node.prev = iter.prev;
    if (iter.prev) {
      iter.prev.next = node;
      iter.prev = node;
    }
  }

  let newHeadIter = node;
  while (newHeadIter.prev) {
    newHeadIter = newHeadIter.prev;
  }

  return newHeadIter;
}
