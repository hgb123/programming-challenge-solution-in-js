/*
e-olymp > 2. Digits
*/

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split(/\r?\n/);

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const N = readLine();
  const res = N.length;
  console.log(res);
}
