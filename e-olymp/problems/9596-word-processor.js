/*
e-olymp > 9596. Word Processor
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
  const [n, k] = readLine().split(" ").map(Number);
  const words = readLine().split(" ");
  const res = [];
  let acc = [];
  for (const word of words) {
    if ([...acc, word].join("").length > k) {
      res.push(acc.join(" "));
      acc = [word];
    } else {
      acc.push(word);
    }
  }
  res.push(acc.join(" "));
  res.filter(Boolean).forEach((r) => console.log(r));
}
