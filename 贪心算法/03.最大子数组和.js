// https://leetcode.cn/problems/maximum-subarray/submissions/ 
 
 var maxSubArray = function(nums) {
  let res = nums[0]
  let temp = nums[0]
  for(let i = 1; i < nums.length; i++) {
      temp = Math.max(temp + nums[i], nums[i])
      res = Math.max(res, temp)
  }
  return res
};