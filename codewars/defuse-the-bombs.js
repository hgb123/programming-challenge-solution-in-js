/*
CodeWars > Defuse the bombs!
*/

console.log(Object.keys(Bomb));

// 10
console.log(Bomb.diffuse.toString());
Bomb.diffuse(Bomb.key);

// 9
console.log(Bomb.hint);
console.log(Bomb.diffuse.toString());
while (Bomb.hint === "just keep trying") {
  Bomb.diffuse(Bomb.key);
}
console.log("\n\n");

// 8
console.log(Bomb.hint);
console.log(Bomb.diffuse.toString());
Bomb.diffuse(this.BombKey);
console.log("\n\n");

// 7
console.log(Bomb.hint);
console.log(Bomb.diffuse.toString());
function diffuseTheBomb() {
  return true;
}
Bomb.diffuse();
console.log("\n\n");

// 6
console.log(Bomb.hint);
console.log(Bomb.diffuse.toString());
console.log(
  Buffer.from("VGhlIGtleSBpcyAiMy4xNDE1OSI=", "base64").toString("utf-8")
);
Bomb.diffuse(3.14159);
console.log("\n\n");

// 5
console.log(Bomb.hint);
console.log(Bomb.diffuse.toString());
const date = new Date();
date.setFullYear(date.getFullYear() - 4);
Bomb.diffuse(date);
console.log("\n\n");

// 4
console.log(Bomb.hint);
console.log(Bomb.diffuse.toString());
Bomb.diffuse(Object.freeze({ key: 43 }));
console.log("\n\n");

// 3
console.log(Bomb.hint);
console.log(Bomb.diffuse.toString());
Bomb.diffuse({
  applied: false,
  valueOf: function () {
    let val = !this.applied ? 9 : 11;
    this.applied = true;
    return val;
  },
});
console.log("\n\n");

// 2
console.log(Bomb.hint);
console.log(Bomb.diffuse.toString());
const MathRandom = Math.random;
Math.random = function () {
  return {
    valueOf: () => {
      let val = !this.applied ? 0.5 : 1;
      this.applied = true;
      return val;
    },
  };
};
Bomb.diffuse(42);
Math.random = MathRandom;
console.log("\n\n");

// 1
console.log(Bomb.hint);
console.log(Bomb.diffuse.toString());
Array.prototype.valueOf = function () {
  return this.reduce((acc, el) => acc + el, 0);
};
Bomb.diffuse(Buffer.from("yes", "ascii").toString("base64"));
console.log("\n\n");
