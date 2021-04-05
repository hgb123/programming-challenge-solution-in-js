/*
LeetCode > Design Circular Queue

Tags: design, queue
*/

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.arr = [];
  this.maxSize = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  this.arr.push(value);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  this.arr.shift();
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.arr[0];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this.arr.slice(-1)[0];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.arr.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.arr.length === this.maxSize;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
