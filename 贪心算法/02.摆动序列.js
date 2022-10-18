// https://leetcode.cn/problems/wiggle-subsequence/submissions/

var wiggleMaxLength = function(nums) {
  const len = nums.length
  if(len < 2) return len
  // flag作为标记 记录i-1个元素和i-2个元素之间是上升关系还是下降关系
  // 上升: 后者值大于前者 反之就是下降关系
  let flag = 0
  // 当len>=2时 至少可以找出长度为1的序列
  let res = 1
  for(let i = 1; i < len; i++) {
      if(nums[i] > nums[i-1] && flag !== 1) {
          res++
          flag = 1
      } else if(nums[i] < nums[i-1] && flag !== 2) {
          res++
          flag = 2
      }
  }
  return res
};