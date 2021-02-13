/*
CodeChef > Chapter and Events (CHAPTER)
Contest: Code Fiesta 2.0 (CFS22021)
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
  let numberOfTestCases = +readLine();
  while (numberOfTestCases--) {
    /*
    X core team members
    ith member made A[i] questions
    K next days
    a quiz should have exactly M questions
    restricted to keep only one quiz per day

    find the maximum number of quizzes that can be facilitated in these K days
    */
    let [X, M, K] = readLine().split(" ").map(Number);
    let A = readLine().split(" ").map(Number);

    let sumA = A.reduce((acc, el) => acc + el, 0);
    let res = Math.min(Math.floor(sumA / M), K);
    console.log(res);
  }
}
