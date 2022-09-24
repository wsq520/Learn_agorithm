// 题目已说明n>=1 所以不考虑为0的情况 那么数列就1，2开头 此时最终返回的是索引为n-1的值 
// 其实这个规律就是斐波那契数列！

var climbStairs = function(n) {
  if(n === 1 || n === 2 || n === 3) return n
  let dp = [1, 2, 3]
  for(let i = 3; i < n; i++) {
      dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n-1]
};