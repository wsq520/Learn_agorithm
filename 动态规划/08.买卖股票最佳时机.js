// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  const len = prices.length
  if (len <= 1) return 0
  let min = prices[0], max = 0
  for (let i = 1; i < len; i++) {
    // max实际上记录的今天卖出股票的最大利润
    max = Math.max(max, prices[i] - min)
    // min实际上记录的今天之前买入股票的最小价格
    min = Math.min(min, prices[i])
  }
  return max
};