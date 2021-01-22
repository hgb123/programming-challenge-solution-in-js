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
