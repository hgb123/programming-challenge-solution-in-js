/*
HackerRank > Reverse a doubly linked list
*/

function reverse(head) {
  const reversedLList = new DoublyLinkedList();
  const arr = [];
  let iter = head;
  while (iter) {
    arr.push(iter.data);
    iter = iter.next;
  }
  arr.reverse();
  arr.forEach((data) => reversedLList.insertNode(data));
  return reversedLList.head;
}
