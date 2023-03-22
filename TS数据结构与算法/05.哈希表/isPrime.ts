// 判断一个数是不是质数
function isPrime(num: number): boolean {
  const len = Math.floor(Math.sqrt(num))

  for (let i = 2; i <= len; i++) {
    if (num % i === 0) return false
  }

  return true
}

console.log(isPrime(18))
console.log(isPrime(13))
// console.log(isPrime(2))
// console.log(isPrime(12))

export default isPrime