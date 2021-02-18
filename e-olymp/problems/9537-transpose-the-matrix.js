/*
e-olymp > 9537. Transpose the matrix
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
  let [N, M] = readLine().split(" ");
  let matrix = [];
  while (N--) {
    matrix.push(readLine().split(" "));
  }

  transpose(matrix)
    .map((row) => row.join(" "))
    .forEach((row) => {
      console.log(row);
    });
}
