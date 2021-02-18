/*
e-olymp > 2669. Rotation
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
  let matrix = [];
  let line = N;
  while (line--) [matrix.push(readLine().split(" ").map(Number))];
  matrix = transpose(matrix);
  matrix.forEach((row) => row.reverse());

  console.log(M, N);
  matrix.map((row) => row.join(" ")).forEach((row) => console.log(row));
}
