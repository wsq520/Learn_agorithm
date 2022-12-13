// https://leetcode.cn/problems/minimum-operations-to-make-the-array-increasing/description/?languageTags=javascript

function minOperations(nums: number[]): number {
  let count: number = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      count += Math.abs(nums[i] - nums[i - 1]) + 1
      nums[i] = nums[i - 1] + 1
    }
  }
  return count
};

export { }