/*
LeetCode > Finding Pairs With a Certain Sum

Tags: hash table, design
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;
  this.occurences2 = nums2.reduce(
    (acc, el) => acc.set(el, (acc.get(el) || 0) + 1),
    new Map()
  );
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  const num = this.nums2[index];
  const newNum = num + val;
  this.occurences2.set(num, this.occurences2.get(num) - 1);
  this.occurences2.set(newNum, (this.occurences2.get(newNum) || 0) + 1);
  this.nums2[index] = newNum;
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  let res = 0;
  for (const num1 of this.nums1) {
    res += this.occurences2.get(tot - num1) || 0;
  }
  return res;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
