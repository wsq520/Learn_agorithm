// https://leetcode.cn/problems/min-max-game/description/?languageTags=javascript

function minMaxGame(nums: number[]): number {
  let newNums: number[] = []
  let newLen: number = 0
  while (nums.length > 1) {
    newNums = []
    newLen = Math.floor(nums.length / 2)
    for (let i = 0; i < newLen; i++) {
      if (i % 2 === 0) {
        newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1])
      } else {
        newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1])
      }
    }
    nums = newNums
  }
  return nums[0]
};

export { }