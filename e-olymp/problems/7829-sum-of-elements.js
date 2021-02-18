/*
e-olymp > 7829. Sum of elements
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
  readLine();
  const A = readLine().split(" ").map(Number);
  const res = A.reduce((acc, el) => acc + el, 0);
  console.log(res);
}
