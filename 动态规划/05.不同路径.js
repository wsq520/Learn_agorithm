var uniquePaths = function(m, n) {
  //初始化： dp[i][0]一定都是1，因为从(0, 0)的位置到(i, 0)的路径只有一条，那么dp[0][j]也同理
  const dp = Array(m).fill().map(item => Array(n))
  for(let i = 0; i < m; i++) {
      dp[i][0] = 1
  }
  for(let i = 0; i < n; i++) {
      dp[0][i] = 1
  }
  for(let i = 1; i < m; i++) {
      for(let j = 1; j < n; j++) {
          dp[i][j] = dp[i-1][j] + dp[i][j-1]
      }
  }
  return dp[m-1][n-1]
};