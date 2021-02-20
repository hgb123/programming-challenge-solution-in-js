/*
cses.fi > Increasing Array
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
  readLine();
  const a = readLineNumberArray();
  let res = 0;
  for (let i = 1; i < a.length; i++) {
    if (a[i] < a[i - 1]) {
      res += a[i - 1] - a[i];
      a[i] = a[i - 1];
    }
  }
  console.log(res);
}
