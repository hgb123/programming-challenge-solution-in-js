function InputReader(input) {
  this.input = input.split("\n");
  this.currentLine = 0;
  this.readLine = () => {
    return this.input[this.currentLine++];
  };
}

function Main(input) {
  const inputReader = new InputReader(input);
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
