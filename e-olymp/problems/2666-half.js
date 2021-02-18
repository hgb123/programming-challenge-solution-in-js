/*
e-olymp > 2666. Half
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
  const N = +readLine();
  const res = [];
  for (let i = 0; i < N; i++) {
    let temp = [];
    for (let j = 0; j < N; j++) {
      temp.push(j === N - i - 1 ? 0 : j < N - i - 1 ? 2 : 1);
    }
    res.push(temp);
  }
  res.map((row) => row.join("")).forEach((row) => console.log(row));
}
