/*
e-olymp > 4749. Theater revenue
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
  const [N, M] = readLine().split(" ").map(Number);
  let line = N * 2;
  let rows = [];
  while (line--) {
    rows.push(readLine().split(" ").map(Number));
  }

  let res = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (rows[i + N][j] === 1) {
        res += rows[i][j];
      }
    }
  }

  console.log(res);
}
