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
  };
}

function solution(S) {
  const chars = S.split("");
  const stack = new Stack();
  chars.forEach((c) => {
    if (c === "(") {
      stack.push(c);
    } else {
      const head = stack.pop();
      if (head === "(") {
        return;
      }
      stack.push(c);
    }
  });
  return stack.size === 0 ? 1 : 0;
}
