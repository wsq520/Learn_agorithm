// https://leetcode.cn/problems/house-robber/description/

var rob = function (nums) {
  if (nums.length === 1) return nums[0]
  // dp[0] = 0是因为第0个房屋打劫到的金额为0
  const dp = [0, nums[0]]
  for (let i = 2; i <= nums.length; i++) {
    // 比较前两个房屋+当前房屋打劫的金额 和 前一个房屋打劫的金额 谁大
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
  }
  return dp[dp.length - 1]
};