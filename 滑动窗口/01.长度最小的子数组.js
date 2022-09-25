// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

var minSubArrayLen = function(target, nums) {
  let left = 0, right = 0
  let res = nums.length + 1, sum = 0
  while(right < nums.length) {
      sum += nums[right++]
      // 开始滑动窗口
      while(sum >= target) {
          if((right - left) < res) {
              res = right - left
          }
          sum -= nums[left++]
      }
  }
  return res > nums.length ? 0 : res
};