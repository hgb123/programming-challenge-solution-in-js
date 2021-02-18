/*
e-olymp > 1000. a + b Problem
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
  while (true) {
    const line = readLine();
    if (!line) {
      break;
    }
    const [a, b] = line.split(" ").map(Number);
    console.log(a + b);
  }
}
