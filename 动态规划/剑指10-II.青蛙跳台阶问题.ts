// https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/description/?languageTags=javascript

function numWays(n: number): number {
  if (n === 0) return 1
  if (n <= 2) return n
  let dp = [1, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % (1e9 + 7)
  }
  return dp[n]
};

export { }