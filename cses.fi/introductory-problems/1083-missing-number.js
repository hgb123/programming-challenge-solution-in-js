/*
cses.fi > Missing Number
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
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  readLine();
  let input = readLine().split(" ").map(Number);
  const nums = new Set(input);
  let res;
  for (let i = 1; ; i++) {
    if (!nums.has(i)) {
      res = i;
      break;
    }
  }
  console.log(res);
}
