// https://leetcode.cn/problems/advantage-shuffle/description/

function advantageCount(nums1: number[], nums2: number[]): number[] {
  const res: number[] = []
  nums1.sort((a, b) => a - b)

  const help = (num: number) => {
    for (let i = 0; i < nums1.length; i++) {
      if (nums1[i] > num) return i
    }
    return 0
  }

  for (let i = 0; i < nums2.length; i++) {
    let index = help(nums2[i])
    res.push(nums1[index])
    nums1.splice(index, 1)
  }
  return res
};

export { }