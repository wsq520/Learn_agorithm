// https://leetcode.cn/problems/sqrtx/description/

function mySqrt(x: number): number {
  if (x === 0) return 0
  let left = 1, right = x
  let res: number = -1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (mid * mid < x) {
      left = mid + 1
    } else if (mid * mid > x) {
      right = mid - 1
      // res在这记录mid - 1 就比如x=8 它的平方根2.8... 那么其平方根保留是2
      res = mid - 1
    } else {
      return mid
    }
  }
  return res
};

export {}