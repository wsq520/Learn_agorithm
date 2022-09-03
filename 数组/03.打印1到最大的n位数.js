/*
输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

示例 1:

输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
 

说明：

用返回一个整数列表来代替打印
n 为正整数
*/

// 特殊情况就是n为0或1 从2开始 最大的n位十进制数就是10^n - 1
// n=2 最大就是99 n=3最大就是999 以此类推...
var printNumbers = function(n) {
  if(n === 0) {
      return
  }
  if(n === 1) {
      let number = []
      for(let i = 1; i <=9; i++) {
          number.push(i)
      }
      return number
  }
  const num = Math.pow(10, n) - 1
  let number = []
  for(let i = 1; i <= num; i++) {
      number.push(i)
  }
  return number
};