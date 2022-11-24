// https://leetcode.cn/problems/counting-bits/description/

function countBits(n: number): number[] {
  const bits = new Array(n + 1).fill(0)

  const countOnes = (x) => {
    let ones = 0
    while (x > 0) {
      x &= (x - 1)
      ones++
    }
    return ones
  }

  for (let i = 0; i <= n; i++) {
    bits[i] = countOnes(i)
  }
  return bits
};

export { }

