// https://leetcode.cn/problems/sign-of-the-product-of-an-array/submissions/

function arraySign(nums: number[]): number {
  let res:number = 1
  for(const item of nums) {
      if(item === 0) {
          return 0
      }
      if(item < 0) {
          res = -res
      }
  }
  return res
};