https://leetcode.cn/problems/top-k-frequent-elements/submissions/

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>()
  let res: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1)
    } else {
      map.set(nums[i], map.get(nums[i])! + 1)
    }
  }
  // 将map转换成数组 通过数组内置方法sort进行排序
  let arr = Array.from(map)
  // arr实际上就是 [[k1,v1], [k2, v2],...]
  arr.sort((a, b) => {
    // 这是降序排序
    return b[1] - a[1]
  })
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0])
  }
  return res
};