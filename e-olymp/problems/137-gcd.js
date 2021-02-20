/*
e-olymp > 137. GCD
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

function exp(x, n, m) {
  let res = 1;
  x %= m;
  while (n) {
    if (n % 2 !== 0) {
      res = (res * x) % m;
    }

    n = Math.floor(n / 2);
    x = (x * x) % m;
  }

  return res;
}

function gcd(a, b) {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}

function main() {
  readLine();
  const arr = readLine().split(" ").map(Number);
  const res = arr.reduce((acc, el) => gcd(acc, el), arr[0]);
  console.log(res);
}
