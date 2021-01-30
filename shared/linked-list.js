function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;

  this.insertNode = function (data) {
    const node = new SinglyLinkedListNode(data);

    if (head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  };
}

function DoublyLinkedListNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;

  this.insertNode = function (data) {
    const node = new DoublyLinkedListNode(data);

    if (head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
  };
}
