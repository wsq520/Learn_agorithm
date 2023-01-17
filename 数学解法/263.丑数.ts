// https://leetcode.cn/problems/ugly-number/description/

function isUgly(n: number): boolean {
  if (n <= 0) return false

  const nums: number[] = [2, 3, 5]
  for (const num of nums) {
    while (n % num === 0) {
      n = n / num
    }
  }
  return n === 1
};

export { }