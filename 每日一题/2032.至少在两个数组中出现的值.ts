// https://leetcode.cn/problems/two-out-of-three/description/

function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  const res:number[] = []

  const map = new Map()

  const helper = (arr:number[]) => {
      const arr1 = [...new Set(arr)]
      arr1.map(item => {
          const val = map.get(item)
          val === undefined ? map.set(item, 1) : map.set(item, val + 1)
      })
  }

  helper(nums1)
  helper(nums2)
  helper(nums3)

  for(const [k,v] of map) {
      if(v >= 2) {
          res.push(k)
      }
  }

  return res
};

export {}