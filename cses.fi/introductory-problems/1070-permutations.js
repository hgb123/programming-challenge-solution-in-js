/*
cses.fi > Permutations
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
  const N = +readLine();
  let res = [];
  if (N === 1) {
    res = [1];
  } else if (N < 4) {
    res = [];
  } else {
    for (let i = 2; i <= N; i += 2) {
      res.push(i);
    }
    for (let i = 1; i <= N; i += 2) {
      res.push(i);
    }
  }

  res = res.length ? res.join(" ") : "NO SOLUTION";
  console.log(res);
}
