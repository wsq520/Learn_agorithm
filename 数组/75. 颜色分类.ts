// https://leetcode.cn/problems/sort-colors/description/?languageTags=javascript

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const swap = (nums: number[], i: number, j: number) => {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  let left = 0
  let right = nums.length - 1

  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      swap(nums, i, left)
      left++
    } else if (nums[i] === 2) {
      swap(nums, i, right)
      right--
      i--
    }
  }

};

export { }