/*
CodeWars > How many are smaller than me?
*/

function smaller(nums) {
  const N = nums.length;
  let res = Array(nums.length).fill(0);
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (nums[j] < nums[i]) {
        res[i]++;
      }
    }
  }
  return res;
}
