// https://leetcode.cn/problems/find-pivot-index/solutions/

function pivotIndex(nums: number[]): number {
  const sum: number = nums.reduce((pre, cur) => {
    return pre + cur
  }, 0)
  let leftSum: number = 0
  for (let i = 0; i < nums.length; i++) {
    // 减去nums[i]是因为sum里包含了nums[i]
    const rightSum = sum - leftSum - nums[i]
    if (leftSum === rightSum) return i
    leftSum += nums[i]
  }
  return -1
};