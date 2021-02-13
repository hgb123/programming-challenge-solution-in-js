/*
CodeChef > Pizza Treat (PIZZATRT)
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
  let T = +readLine();
  while (T--) {
    let P = +readLine();
    let [L, ...Rs] = readLine().split(" ").map(Number);
    let min = Math.min.apply(null, Rs);
    while (true) {
      let count = Rs.reduce((acc, R) => {
        let a = 1;
        let b = 1;
        let c = -(min * 2) / R;
        let delta = b * b - 4 * a * c;
        return acc + Math.floor((Math.sqrt(delta) - b) / (2 * a));
      }, 0);
      if (count >= P) {
        break;
      }
      min++;
    }
    console.log(min);
  }
}
