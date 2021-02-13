/*
CodeChef > Share Trading (SHRETRD)
Contest: Code Fiesta 2.0 (CFS22021)
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
    let A = readLine().split(" ").map(Number).filter(Boolean);
    let profit = 0;
    for (let i = 1; i < A.length; i++) {
      if (A[i] > A[i - 1]) {
        profit += A[i] - A[i - 1];
      }
    }
    console.log(profit);
  }
}
