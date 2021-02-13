/*
CodeChef > Narcissistic Check (NARCHK)
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
  let numInStr = readLine();
  let num = +numInStr;
  let digits = numInStr.split("").map(Number);
  digits.pop();
  let exponent = digits.length;
  let isNarcissistic =
    digits.reduce((acc, el) => acc + Math.pow(el, exponent), 0) === num;
  console.log(isNarcissistic ? "Yes" : "No");
}
