/*
XOR (^):
  1 ^ 0 = 1
  0 ^ 1 = 1
  1 ^ 1 = 0
  0 ^ 0 = 0

  0 ^ a = a
  a ^ a = 0

Approach:
  For example, we have original perm: [a0, a1, a2, a3, a4]
  The encoded (input) would be: [a0^a1, a1^a2, a2^a3, a3^a4]
  Transform the encoded to [a0^a1, a0^a2, a0^a3, a0^a4] (loop from 1st element of encoded, accumulated xor) (1)
  We calculate a0^a1^a2^a3^a4 (loop from 1 to the perm size, accumulated xor) (2)
  From (1) (2), we calculate a0 by: (a0^a1) ^ (a0^a2) ^ (a0^a3) ^ (a0^a4) ^ (a0^a1^a2^a3^a4) = a0
  Having a0, we will now have the perm: [a0, a0^(a0^a1), a0^(a0^a2), a0^(a0^a3), a0^(a0^a4)] = [a0, a1, a2, a3, a4]
*/

var decode = function (encoded) {
  const a0XorTheRest = [encoded[0]];
  let acc = encoded[0];
  for (let i = 1; i < encoded.length; i++) {
    acc ^= encoded[i];
    a0XorTheRest.push(acc);
  }
  let a0AccXorToAn = 0;
  for (let i = 1; i <= encoded.length + 1; i++) {
    a0AccXorToAn ^= i;
  }
  const a1 = a0XorTheRest.reduce((acc, el) => (acc ^= el), 0) ^ a0AccXorToAn;
  const perm = [a1];
  a0XorTheRest.forEach((el) => perm.push(a1 ^ el));
  return perm;
};
