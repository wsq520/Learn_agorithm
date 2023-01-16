// https://leetcode.cn/problems/count-primes/description/?languageTags=javascript

function countPrimes(n: number): number {
  const arr: boolean[] = new Array(n).fill(true)
  let count: number = 0
  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      count++
      // 当前质数的平方不是质数 平方之后的数 + 当前质数本身 是质数
      // 平方之后的数 + 当前质数本身 + 当前质数本身 也是质数(开始循环即可)
      for (let j = i * i; j < n; j += i) {
        arr[j] = false
      }
    }
  }
  return count
};

export { }