/*
cses.fi > Repetitions
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
  let S = readLine().split("");
  let acc = 1;
  let max = 1;
  for (let i = 1; i < S.length; i++) {
    if (S[i] === S[i - 1]) {
      acc += 1;
    } else {
      acc = 1;
    }
    max = Math.max(max, acc);
  }
  console.log(max);
}
