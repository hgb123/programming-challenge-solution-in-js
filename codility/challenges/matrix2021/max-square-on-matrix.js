/*
Codility > MaxSquareOnMatrix
Challenge: The Matrix 2021

References:
  https://www.geeksforgeeks.org/largest-rectangle-under-histogram/
  https://leetcode.com/problems/largest-rectangle-in-histogram/
*/

function Stack() {
  const stack = [];

  this.push = function (el) {
    stack.push(el);
  };

  this.pop = function () {
    return stack.pop();
  };

  this.peek = function () {
    return stack[stack.length - 1];
  };

  this.isEmpty = function () {
    return stack.length === 0;
  };
}

// https://app.codility.com/cert/view/cert56P7SC-TWFNXV7XPBSHQR5S/
function solution(A) {
  const N = A.length;
  const stack = new Stack();
  let max = -Infinity;
  let i = 0;
  while (i < N) {
    if (stack.isEmpty() || A[i] >= A[stack.peek()]) {
      stack.push(i++);
    } else {
      let top = stack.pop();
      max = Math.max(
        max,
        Math.min(A[top], stack.isEmpty() ? i : i - stack.peek() - 1)
      );
    }
  }
  while (!stack.isEmpty()) {
    let top = stack.pop();
    max = Math.max(
      max,
      Math.min(A[top], stack.isEmpty() ? i : i - stack.peek() - 1)
    );
  }
  return max;
}

// https://app.codility.com/cert/view/certYAQZHG-7MAKWPT449MPFPGS/
function solution(A) {
  let stack = new Stack();
  let max = -Infinity;
  A.push(0);
  for (const [i, a] of A.entries()) {
    while (!stack.isEmpty() && A[stack.peek()] >= a) {
      const height = A[stack.pop()];
      const width = stack.isEmpty() ? i : i - stack.peek() - 1;
      max = Math.max(max, Math.min(height, width));
    }
    stack.push(i);
  }
  return max;
}
