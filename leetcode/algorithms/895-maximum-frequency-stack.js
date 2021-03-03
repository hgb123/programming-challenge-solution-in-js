/*
LeetCode > Maximum Frequency Stack

Tags: hash table, stack
*/

var FreqStack = function () {
  this.freqMap = new Map();
  this.freqWithElsArr = [];
  this.mostFreq = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {
  const freq = (this.freqMap.get(x) || 0) + 1;
  if (!this.freqWithElsArr[freq]) {
    this.freqWithElsArr[freq] = [];
  }

  this.freqWithElsArr[freq].push(x);
  this.freqMap.set(x, freq);
  this.mostFreq = Math.max(this.mostFreq, freq);

  return null;
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const x = this.freqWithElsArr[this.mostFreq].pop();

  if (this.freqWithElsArr[this.mostFreq].length === 0) {
    this.mostFreq--;
  }

  this.freqMap.set(x, this.freqMap.get(x) - 1);

  return x;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */
