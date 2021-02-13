/*
CodeChef > Maximum Laddus (MAXPRIZE)
Contest: Code Fiesta 2.0 (CFS22021)

Reference: different summands
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
  let num = +readLine();
  let i = 1;
  let res = [];
  while (true) {
    if (num <= 2 * i) {
      res.push(num);
      break;
    }
    res.push(i);
    num -= i;
    i++;
  }
  console.log(res.length);
  console.log(res.join(" "));
}
