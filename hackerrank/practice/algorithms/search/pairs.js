/*
HackerRank > Pairs

Categories: binary search
*/

function binarySearch(A, x) {
  const N = A.length;
  let begin = 0;
  let end = N - 1;
  let result = -1;
  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);
    if (A[mid] === x) {
      result = mid;
      break;
    }
    if (A[mid] > x) {
      end = mid - 1;
    } else if (A[mid] < x) {
      begin = mid + 1;
    }
  }
  return result;
}

function pairs(k, arr) {
  const sortedArr = Array.from(arr).sort((a, b) => a - b);
  let count = 0;
  for (const a of arr) {
    if (binarySearch(sortedArr, a + k) !== -1) {
      count++;
    }
  }
  return count;
}
