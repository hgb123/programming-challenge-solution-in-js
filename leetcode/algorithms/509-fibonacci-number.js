/*
LeetCode > Fibonacci Number

Tags: array, recursion
*/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, mem = {}) {
  if (mem[n] != null) return mem[n];
  if (n < 2) return n;
  return (mem[n] = fib(n - 1, mem) + fib(n - 2, mem));
};
