function check(nums: number[]): boolean {
  let n = nums.length, x = 0;
  for (let i = 1; i < n; ++i) {
    if (nums[i] < nums[i - 1]) {
      x = i;
      break;
    }
  }
  if (x === 0) {
    return true;
  }
  for (let i = x + 1; i < n; ++i) {
    if (nums[i] < nums[i - 1]) {
      return false;
    }
  }
  return nums[0] >= nums[n - 1];
};

export { }