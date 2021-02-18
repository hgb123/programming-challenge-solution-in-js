/*
e-olymp > 5282. Saddle points
*/

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split(/\r?\n/)
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function transpose(matrix) {
  return matrix[0].map((_, colIdx) => matrix.map((row) => row[colIdx]));
}

function main() {
  const [N, M] = readLine().split(" ").map(Number);
  const matrix = Array.from({ length: N }, (_) =>
    readLine().split(" ").map(Number)
  );
  const tMatrix = transpose(matrix);

  const minRows = matrix.map((row) => Math.min.apply(null, row));
  const maxCols = tMatrix.map((col) => Math.max.apply(null, col));

  let res = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] === minRows[i] && matrix[i][j] === maxCols[j]) {
        res++;
      }
    }
  }

  console.log(res);
}
