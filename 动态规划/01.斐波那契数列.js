var fib = function(n) {
  if(n === 0 || n === 1) return n
  let dp = [0, 1]
  for(let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};

// 数列是0,1开头了 那么f(n)实际上求的就是索引为n的数值 所以循环中i<=n