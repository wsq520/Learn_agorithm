// https://leetcode.cn/problems/coin-change/description/?languageTags=javascript

function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0
  let dp: number[] = Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      // 如果当前硬币面额大于要凑齐的金额 i 直接下一次循环
      if (coins[j] > i) continue
      // dp[i - coins[j]]就是找到凑足 当前需要凑足的金额i - 当前硬币面额 的金额时的硬币个数
      // + 1 实际上就是加上当前的面额为coins[j]的硬币 那么金额就等于当前需要凑足的金额 i
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};

export { }