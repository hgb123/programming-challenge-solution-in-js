// Even Fibonacci numbers

const solution = () => {
  const LIMIT = 4 * 1e6;

  function* fib() {
    let a = 0;
    let b = 1;
    while (1) {
      yield a;
      [a, b] = [b, a + b];
    }
  }

  const fibGen = fib();
  let res = 0;
  while (1) {
    const val = fibGen.next().value;
    if (val > LIMIT) break;
    if (val % 2 === 0) res += val;
  }
  console.log(res);
};

solution();
