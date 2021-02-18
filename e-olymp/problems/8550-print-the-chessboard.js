/*
e-olymp > 8550. Print the chessboard
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

function main() {
  const N = +readLine();
  const matrix = Array.from({ length: N }, (_) => Array(N).fill(0));

  let num = 1;
  for (let i = 0; i < N; i++) {
    for (let j = i % 2 === 0 ? 0 : 1; j < N; j += 2) {
      matrix[i][j] = num++;
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = i % 2 === 0 ? 1 : 0; j < N; j += 2) {
      matrix[i][j] = num++;
    }
  }

  matrix
    .map((row) => row.map((el) => String(el).padStart(2, " ")).join(" "))
    .forEach((row) => console.log(row));
}
