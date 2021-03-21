/*
LeetCode > Number of Orders in the Backlog

Tags: heap, greedy
*/

// const {
//   MinPriorityQueue,
//   MaxPriorityQueue,
// } = require("@datastructures-js/priority-queue");

var getNumberOfBacklogOrders = function (orders) {
  const buyPq = new MaxPriorityQueue({ priority: (order) => order.price });
  const sellPq = new MinPriorityQueue({ priority: (order) => order.price });

  for (let [price, amount, orderType] of orders) {
    const buying = orderType === 0;
    if (buying) {
      while (!sellPq.isEmpty() && amount > 0) {
        let { element: front } = sellPq.dequeue();
        if (front.price > price) {
          sellPq.enqueue(front);
          break;
        }
        const min = Math.min(front.amount, amount);
        amount -= min;
        front.amount -= min;
        if (front.amount > 0) {
          sellPq.enqueue(front);
        }
      }
      if (amount > 0) {
        buyPq.enqueue({ price, amount });
      }
    } else {
      while (!buyPq.isEmpty() && amount > 0) {
        let { element: front } = buyPq.dequeue();
        if (front.price < price) {
          buyPq.enqueue(front);
          break;
        }
        const min = Math.min(front.amount, amount);
        amount -= min;
        front.amount -= min;
        if (front.amount > 0) {
          buyPq.enqueue(front);
        }
      }
      if (amount > 0) {
        sellPq.enqueue({ price, amount });
      }
    }
  }

  return (
    [...buyPq.toArray(), ...sellPq.toArray()].reduce(
      (acc, { element: el }) => acc + el.amount,
      0
    ) %
    (1e9 + 7)
  );
};
