/*
CodeChef > Maximise Function (MAXFUN)
Contest: February Challenge 2021 Division 3 (FEB21C)
*/

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let numberOfTestCases = +readLine();
  while (numberOfTestCases--) {
    readLine();
    let A = readLine()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    let N = A.length;
    let fn = (a, b, c) => Math.abs(a - b) + Math.abs(b - c) + Math.abs(c - a);
    let res = Math.max(fn(A[N - 1], A[N - 2], A[0]), fn(A[N - 1], A[0], A[1]));
    console.log(res);
  }
}
