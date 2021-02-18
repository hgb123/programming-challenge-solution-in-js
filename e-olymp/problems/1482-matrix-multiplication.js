/*
e-olymp > 1482. Matrix multiplication
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
  let line;
  const [M, N] = readLine().split(" ").map(Number);
  let A = [];
  let B = [];
  let C = [];
  line = M;
  while (line--) {
    A.push(readLine().split(" ").map(Number));
  }
  const [NN, Q] = readLine().split(" ").map(Number);
  if (NN !== N) {
    console.log(-1);
    return;
  }
  line = N;
  while (line--) {
    B.push(readLine().split(" ").map(Number));
  }

  for (let i = 0; i < M; i++) {
    const temp = [];
    for (let j = 0; j < Q; j++) {
      let sum = 0;
      for (let r = 0; r < N; r++) {
        sum += A[i][r] * B[r][j];
      }
      temp.push(sum);
    }
    C.push(temp);
  }

  console.log(M, Q);
  C.map((row) => row.join(" ")).forEach((row) => console.log(row));
}
