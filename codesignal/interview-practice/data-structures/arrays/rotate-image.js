/*
CodeSignal > rotateImage

Constraint: O(1) additional memory

Tags: array
*/

function rotateImage(a) {
  a.reverse();
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a[i].length; j++) {
      [a[i][j], a[j][i]] = [a[j][i], a[i][j]];
    }
  }
  return a;
}
