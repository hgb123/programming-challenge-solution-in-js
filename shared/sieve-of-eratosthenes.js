const sieveOfEratosthenes = (n) => {
  const prime = new Uint8Array(n).fill(true);
  prime[0] = prime[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (prime[i]) {
      for (let k = i * i; k <= n; k += i) {
        prime[k] = false;
      }
    }
  }
  return prime;
};
