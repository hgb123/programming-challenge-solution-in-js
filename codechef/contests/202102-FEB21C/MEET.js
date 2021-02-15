/*
CodeChef > Chef and Meetings (MEET)
Contest: February Challenge 2021 Division 3 (FEB21C)
*/

/*
In local, run:
  node index.js < input.txt
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
  const toMin = function (str) {
    const [HHmm, A] = str.split(" ");
    let [HH, mm] = HHmm.split(":").map(Number);
    if (A === "AM" && HH === 12) {
      HH -= 12;
    }
    if (A === "PM" && HH !== 12) {
      HH += 12;
    }
    return HH * 60 + mm;
  };

  let numberOfTestCases = +readLine();
  while (numberOfTestCases--) {
    const P = readLine();
    let N = +readLine();
    const A = [];
    while (N--) {
      const line = readLine();
      A.push([line.substring(0, 8), line.substring(9)]);
    }
    let res = A.map(([a, b]) =>
      toMin(a) <= toMin(P) && toMin(P) <= toMin(b) ? 1 : 0
    ).join("");
    console.log(res);
  }
}
