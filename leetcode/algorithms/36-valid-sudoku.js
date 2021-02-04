/*
LeetCode > Valid Sudoku

Tags: array, hash table
*/

function transpose(arrOfArr) {
  const N = arrOfArr.length;
  const M = arrOfArr[0].length;
  const res = [];
  for (let i = 0; i < M; i++) {
    let temp = [];
    for (let j = 0; j < N; j++) {
      temp.push(arrOfArr[j][i]);
    }
    res.push(temp);
  }
  return res;
}

function squareSizeOf3(arrOfArr) {
  const N = arrOfArr.length;
  const M = arrOfArr[0].length;
  const res = [];
  for (let i = 0; i < N; i += 3) {
    for (let j = 0; j < M; j += 3) {
      let temp = [];
      temp.push(arrOfArr[i].slice(j, j + 3));
      temp.push(arrOfArr[i + 1].slice(j, j + 3));
      temp.push(arrOfArr[i + 2].slice(j, j + 3));
      res.push(temp.flat());
    }
  }
  return res;
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  return [...board, ...transpose(board), ...squareSizeOf3(board)]
    .map((row) => row.filter((cell) => cell !== "."))
    .every((row) => row.length === new Set(row).size);
};
