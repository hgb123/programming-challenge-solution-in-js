// Ref: https://codility.com/media/train/solution-stone-wall.pdf

function Stack() {
  stack = [];

  this.push = function (el) {
    stack.push(el);
  };

  this.pop = function () {
    return stack.pop();
  };

  return {
    ...this,
    get size() {
      return stack.length;
    },
    get head() {
      return stack[this.size - 1];
    },
  };
}

function solution(H) {
  let stack = new Stack();
  let count = 0;
  H.forEach((h) => {
    while (stack.size && stack.head > h) {
      stack.pop();
    }
    if (stack.size && stack.head === h) {
      return;
    }
    stack.push(h);
    count++;
  });
  return count;
}
