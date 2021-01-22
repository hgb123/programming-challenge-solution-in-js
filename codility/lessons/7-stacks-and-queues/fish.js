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

function solution(A, B) {
  const stack = new Stack();
  for (let i = 0; i < A.length; i++) {
    let curr = { A: A[i], B: B[i] };
    if (!stack.head) {
      stack.push(curr);
      continue;
    }

    if (stack.head.B === 1 && curr.B === 0) {
      let head;
      while (1) {
        head = stack.pop();
        const winner = head.A > curr.A ? head : curr;
        curr = winner;
        if (!(stack.head && stack.head.B === 1 && curr.B === 0)) {
          stack.push(winner);
          break;
        }
      }
    } else {
      stack.push(curr);
    }
  }
  return stack.size;
}
