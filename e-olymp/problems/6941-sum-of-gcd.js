/*
e-olymp > 6941. Sum of GCD
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

function gcd(a, b) {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}

function main() {
  let numberOfTestCases = readLine();
  while (numberOfTestCases--) {
    const [m, ...arr] = readLine().split(" ").map(Number);
    let sum = 0;
    for (let i = 0; i < m - 1; i++) {
      for (let j = i + 1; j < m; j++) {
        sum += gcd(arr[i], arr[j]);
      }
    }
    console.log(sum);
  }
}
