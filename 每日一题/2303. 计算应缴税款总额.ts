// https://leetcode.cn/problems/calculate-amount-paid-in-taxes/description/?languageTags=javascript

function calculateTax(brackets: number[][], income: number): number {
  let res: number = 0
  let preUpper: number = 0

  for (const item of brackets) {
    const upper = item[0]
    const precent = item[1]
    res += (Math.min(income, upper) - preUpper) * precent
    if (income <= upper) break
    preUpper = upper
  }

  return res / 100.0
};

export { }