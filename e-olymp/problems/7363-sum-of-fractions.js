/*
e-olymp > 7363. Sum of fractions
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

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function main() {
  const [a, b, c, d] = readLine().split(" ").map(Number);
  let down = lcm(b, d);
  let up = (a * down) / b + (c * down) / d;
  const upDownGcd = gcd(up, down);
  down /= upDownGcd;
  up /= upDownGcd;
  const res = up % down === 0 ? up / down : up + " " + down;
  console.log(res);
}
