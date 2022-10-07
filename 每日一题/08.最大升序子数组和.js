// https://leetcode.cn/problems/maximum-ascending-subarray-sum/
var maxAscendingSum = function (nums) {
  let res = nums[0]
  let curSum = 0
  // 从 i = 1开始遍历数组 防止 i - 1 出现 -1的情况
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      if (i - 1 === 0) {
        curSum += nums[i] + nums[0]
      } else {
        curSum += nums[i]
      }
    } else {
      // 出现降序情况 那么就在当前索引位置对应的值开始重新计算和
      curSum = nums[i]
    }
    res = Math.max(res, curSum)
  }
  return res
}