/*
e-olymp > 4730. Fibonacci
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

function fib(n, memo = {}) {
  if (memo[n]) {
    return memo[n];
  }
  if (n < 2) {
    memo[n] = 1;
  } else {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  }

  return memo[n];
}

function main() {
  let n = +readLine();
  const res = fib(n);
  console.log(res);
}
