var minCostClimbingStairs = function(cost) {
  let dp = [cost[0], cost[1]]
  for(let i = 2; i <= cost.length; i++) {
      dp[i] = Math.min(dp[i-1] + cost[i], dp[i - 2] + cost[i])
  }
  return Math.min(dp[cost.length -1], dp[cost.length - 2])
};


// i-1和i-2是因为每次可以走1个或2个台阶 那么就应该算出走到第i个台阶是从前面一阶来便宜
// 还是前面两阶来便宜，再加上到达i阶需要支付的费用