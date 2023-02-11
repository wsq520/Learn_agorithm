// https://leetcode.cn/problems/minimum-amount-of-time-to-fill-cups/description/?languageTags=javascript

// 每次都是拿最大的两个来减
function fillCups(amount: number[]): number {
  amount.sort((a, b) => a - b)
  let res: number = 0

  while (amount[1] > 0 && amount[2] > 0) {
    amount[1]--
    amount[2]--
    amount.sort((a, b) => a - b)
    res++
  }

  return res + amount[2]
};

export { }