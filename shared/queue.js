function Queue() {
  const queue = [];

  this.enqueue = function (el) {
    queue.push(el);
  };

  this.dequeue = function () {
    return queue.shift();
  };

  this.peek = function () {
    return queue[0];
  };

  this.isEmpty = function () {
    return queue.length === 0;
  };
}
