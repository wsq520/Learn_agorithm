// https://leetcode.cn/problems/intersection-of-two-arrays/submissions/

function intersection(nums1: number[], nums2: number[]): number[] {
  const resSet: Set<number> = new Set()
  const tempSet: Set<number> = new Set(nums1)
  for (let i = 0; i < nums2.length; i++) {
    if (tempSet.has(nums2[i])) {
      resSet.add(nums2[i])
    }
  }
  // from方法将集合转换成一个数组
  return Array.from(resSet)
};