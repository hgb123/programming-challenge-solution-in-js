/*
CodeChef > Highest Divisor (HDIVISR)
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
  let N = +readLine();
  let i = 9;
  while (i > 0) {
    if (N % i === 0) {
      console.log(i);
      break;
    }
    i--;
  }
}
