// https://leetcode.cn/problems/4sum-ii/submissions/

function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const map: Map<number, number> = new Map()
  let res: number = 0
  let temp: number | undefined
  for (const i of nums1) {
    for (const j of nums2) {
      temp = map.get(i + j)
      if (!temp) {
        map.set(i + j, 1)
      } else {
        map.set(i + j, temp + 1)
      }
    }
  }
  for (const k of nums3) {
    for (const l of nums4) {
      // temp = 0 - nums3[] - nums4[] 
      temp = map.get(0 - (k + l))
      if (temp) {
        res += temp
      }
    }
  }
  return res
};