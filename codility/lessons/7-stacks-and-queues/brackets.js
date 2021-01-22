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

function solution(S) {
  const isOpen = (c) => "{[(".includes(c);
  const closeOf = (c) =>
    ({
      "{": "}",
      "[": "]",
      "(": ")",
    }[c]);
  const chars = S.split("");
  const stack = new Stack();
  chars.forEach((c) => {
    if (isOpen(c)) {
      stack.push(c);
    } else if (c === closeOf(stack.head)) {
      stack.pop();
    } else {
      stack.push(c);
    }
  });
  return stack.size === 0 ? 1 : 0;
}
