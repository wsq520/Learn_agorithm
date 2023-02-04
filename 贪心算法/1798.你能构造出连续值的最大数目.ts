// https://leetcode.cn/problems/maximum-number-of-consecutive-values-you-can-make/description/

function getMaximumConsecutive(coins: number[]): number {
  let res = 0
  coins.sort((a, b) => a - b)

  for (const item of coins) {
    if (item > res + 1) {
      break
    }
    res += item
  }

  return res + 1
};

export { }