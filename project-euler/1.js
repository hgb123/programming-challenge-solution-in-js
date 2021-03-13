// Multiples of 3 and 5

// O(N)
const solution = () => {
  const N = 1000;
  let res = 0;
  for (let i = 1; i < N; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      res += i;
    }
  }
  console.log(res);
};

// O(1)
// Ref for formular: https://math.stackexchange.com/a/9305
const solution2 = () => {
  const N = 1000;

  const sumDivisibleBy = (x) => {
    const n = Math.floor((N - 1) / x);
    return (x * (n * (n + 1))) / 2;
  };

  const res = sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15);

  console.log(res);
};

solution();
solution2();
