// https://leetcode.cn/problems/two-sum/submissions/

function twoSum(nums: number[], target: number): number[] {
  let res: number[] = []
  const map: Map<number, number> = new Map()
  let index: number | undefined = 0
  const len = nums.length
  for (let i = 0; i < len; i++) {
    // nums[index] + nums[i] = target
    index = map.get(target - nums[i])
    if (index !== undefined) {
      res = [i, index]
      break
    }
    map.set(nums[i], i)
  }
  return res
};