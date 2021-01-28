/*
HackerRank > Balanced Brackets
*/

function Stack() {
  const stack = [];

  this.push = function (el) {
    stack.push(el);
  };

  this.pop = function () {
    return stack.pop();
  };

  this.peek = function () {
    return stack[stack.length - 1];
  };

  this.isEmpty = function () {
    return stack.length === 0;
  };
}

function isBalanced(s) {
  const isOpen = (c) => "{[(".includes(c);
  const closeOf = (c) =>
    ({
      "{": "}",
      "[": "]",
      "(": ")",
    }[c]);
  const stack = new Stack();
  for (const c of s) {
    if (isOpen(c)) {
      stack.push(c);
    } else if (c === closeOf(stack.peek())) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.isEmpty() ? "YES" : "NO";
}
