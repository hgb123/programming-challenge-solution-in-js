/*
LeetCode > Search a 2D Matrix II

Tags: binary search
*/

function binarySearch(A, k) {
  const N = A.length;
  let begin = 0;
  let end = N - 1;
  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);
    if (A[mid] === k) {
      return true;
    } else if (A[mid] > k) {
      end = mid - 1;
    } else if (A[mid] < k) {
      begin = mid + 1;
    }
  }
  return false;
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// O(m * logn)
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let res = false;

  for (let i = 0; i < m; i++) {
    const arr = matrix[i];
    if (binarySearch(arr, target)) {
      res = true;
    }
  }

  return res;
};

// O(m + n)
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let i = 0;
  let j = n - 1;

  while (j >= 0 && i < m) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] < target) {
      // can't be at the current col so:
      i++;
    } else if (matrix[i][j] > target) {
      // can't be at the current row so:
      j--;
    }
  }

  return false;
};
