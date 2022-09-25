// https://leetcode.cn/problems/make-two-arrays-equal-by-reversing-subarrays/

var shuffle = function(nums, n) {
  const res = []
  for(let i = 0; i < n; i++) {
      res.push(nums[i])
      res.push(nums[i+n])
  }
  return res
};