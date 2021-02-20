/*
HackerEarth > Monk and Rotation
Track: Codemonk
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

function main() {
  let numberOfTestCases = readLine();
  while (numberOfTestCases--) {
    let [N, K] = readLine().split(" ").map(Number);
    K = (N - K) % N;
    const arr = readLine().split(" ").map(Number);
    const res = [...arr.slice(K), ...arr.slice(0, K)].join(" ");
    console.log(res);
  }
}
