// https://leetcode.cn/problems/make-array-zero-by-subtracting-equal-amounts/description/

function minimumOperations(nums: number[]): number {
  const set = new Set()

  for (const num of nums) {
    if (num > 0) set.add(num)
  }

  return set.size
}

export { }