/*
cses.fi > Weird Algorithm
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

function readLineRawArray() {
  return readLine().split(" ");
}

function readLineNumberArray() {
  return readLine().split(" ").map(Number);
}

function main() {
  let N = +readLine();
  let res = [];
  while (1) {
    res.push(N);
    if (N === 1) {
      break;
    }
    if (N % 2 === 0) {
      N /= 2;
    } else {
      N = N * 3 + 1;
    }
  }
  res = res.join(" ");
  console.log(res);
}
