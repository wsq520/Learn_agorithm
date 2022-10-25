// https://leetcode.cn/problems/happy-number/submissions/

function isHappy(n: number): boolean {
  function handler(value: number): number {
    // 将一个数字转换成字符串再切割成数组 利用数组reduce函数计算累计和
    return String(value).split('').reduce((pre, cur) => {
      return pre + Number(cur) ** 2
    }, 0)
  }
  // 当同一个sum出现两次 说明这个数字肯定不是快乐数
  const resSet = new Set<number>()
  while (n !== 1 && !resSet.has(n)) {
    resSet.add(n)
    n = handler(n)
  }
  return n === 1
};