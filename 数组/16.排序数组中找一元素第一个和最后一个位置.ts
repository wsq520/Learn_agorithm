// https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/

function searchRange(nums: number[], target: number): number[] {
  function getBorder(nums: number[], target: number, flag: string): number {
    let left = 0
    let right = nums.length - 1
    if (flag === "right") {
      let rightBorder = 0
      while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] <= target) {
          left = mid + 1
          rightBorder = left
        } else {
          right = mid - 1
        }
      }
      return rightBorder
    } else {
      let leftBorder = nums.length - 1
      while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] >= target) {
          right = mid - 1
          leftBorder = right
        } else {
          left = mid + 1
        }
      }
      return leftBorder
    }
  }
  const leftBorder = getBorder(nums, target, "left")
  const rightBorder = getBorder(nums, target, "right")
  if (leftBorder === (nums.length - 1) || rightBorder === 0) return [-1, -1]
  if (rightBorder - leftBorder <= 1) return [-1, -1]
  return [leftBorder + 1, rightBorder - 1]
};