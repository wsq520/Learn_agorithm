function maxSubArray(nums: number[]): number {
  if (!nums) return 0
  let dp = [nums[0]], max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] < 0 ? nums[i] : dp[i - 1] + nums[i]
    if (max < dp[i]) max = dp[i]
  }
  return max
};
export { }