var massage = function (nums) {
  const len = nums.length
  if (len === 0) return 0
  // 为什么dp[1]是数组前两个元素的最大值？
  const dp = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    console.log(dp[i])
  }
 return dp[len-1]
};

massage([1,2,3,1])