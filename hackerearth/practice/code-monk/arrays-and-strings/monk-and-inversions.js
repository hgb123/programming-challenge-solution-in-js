/*
HackerEarth > Monk and Inversions
Track: Codemonk
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
  let numberOfTestCases = readLine();
  while (numberOfTestCases--) {
    const [N] = readLine().split(" ").map(Number);
    const matrix = [];
    for (let i = 0; i < N; i++) {
      matrix.push(readLine().split(" ").map(Number));
    }
    let res = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        for (let p = i; p < N; p++) {
          for (let q = j; q < N; q++) {
            if (matrix[i][j] > matrix[p][q]) {
              res++;
            }
          }
        }
      }
    }
    console.log(res);
  }
}
