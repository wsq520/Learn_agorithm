// https://leetcode.cn/problems/next-greater-element-i/solutions/

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const res: number[] = new Array(nums1.length).fill(-1)
  const helpMap: Map<number, number> = new Map()
  const stack: number[] = []
  nums1.map((value, index) => {
    helpMap.set(value, index)
  })
  stack.push(0)
  for (let i = 1; i < nums2.length; i++) {
    let top = stack[stack.length - 1]
    while (stack.length > 0 && nums2[top] < nums2[i]) {
      let index = helpMap.get(nums2[top])
      if (index !== undefined) {
        res[index] = nums2[i]
      }
      stack.pop()
      top = stack[stack.length - 1]
    }
    if (helpMap.get(nums2[i]) !== undefined) {
      stack.push(i)
    }
  }
  return res
};