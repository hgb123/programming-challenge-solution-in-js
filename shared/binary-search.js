function binarySearch(A, x) {
  let N = A.length;
  let begin = 0;
  let end = N - 1;
  let result = -1;
  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);
    if (A[mid] > x) {
      end = mid - 1;
    } else if (A[mid] < x) {
      begin = mid + 1;
    } else {
      result = mid;
      break;
    }
  }
  return result;
}
