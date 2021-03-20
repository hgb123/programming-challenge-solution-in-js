/*
e-olymp > 10126. Pairs
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
  const [N, K] = readLineNumberArray();
  const A = readLineNumberArray();
  const set = new Set(A);
  let res = 0;
  for (const num of A) {
    if (set.has(num - K) && num !== num - K) {
      res++;
    }
  }
  console.log(res);
}
