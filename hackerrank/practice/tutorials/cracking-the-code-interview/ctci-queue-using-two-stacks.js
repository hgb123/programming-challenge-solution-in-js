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

function processData(input) {
  const queue = new Queue();
  const output = [];
  for (const [op, val] of input) {
    switch (op) {
      case 1: {
        queue.enqueue(val);
        break;
      }
      case 2: {
        queue.dequeue();
        break;
      }
      case 3: {
        output.push(queue.peek());
        break;
      }
    }
  }
  return output;
}
