/*
e-olymp > 9536. Sum of matrices
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
  inputString = inputString.filter(Boolean);
  let [N, M] = readLine().split(" ").map(Number);
  let rows = [];
  let line = N * 2;
  while (line--) {
    rows.push(readLine().split(" ").map(Number));
  }
  let res = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      rows[i][j] += rows[i + N][j];
    }
    res.push(rows[i]);
  }
  res.map((row) => row.join(" ")).forEach((row) => console.log(row));
}
