// https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop/submissions/

var finalPrices = function (prices) {
  if (!prices.length) {
    return []
  }
  const res = []
  let flag = true
  for (let i = 0; i < prices.length; i++) {
    flag = true
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        res.push(prices[i] - prices[j])
        flag = false
        break
      }
    }
    if (flag) {
      res.push(prices[i])
    }
  }
  return res
}