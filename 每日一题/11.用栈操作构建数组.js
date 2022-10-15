// https://leetcode.cn/problems/build-an-array-with-stack-operations/

var buildArray = function(target, n) {
  let i = 1, j = 0
  const len = target.length
  const res = []
  // 变量i就是原来遍历list的
  while (i <= n && j < len) {
      if (target[j] === i) {
          res.push('Push')
          j++
          i++
      } else {
          res.push('Push')
          res.push('Pop')
          i++
      }
  }
  // 数组res记录的实际上是 从list里面找出存在target里的数字并将这些数字组成target数组的栈操作过程
  return res
};