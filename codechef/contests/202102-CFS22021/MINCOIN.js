/*
CodeChef > Minimum Coins (MINCOIN)
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
  let m = +readLine();
  let count = 0;
  let denoms = [10, 5, 1];
  for (const denom of denoms) {
    count += Math.floor(m / denom);
    m %= denom;
  }
  console.log(count);
}
