// https://leetcode.cn/problems/permutations/description/

function permute(nums: number[]): number[][] {
  let res: any[] = []
  const backtrack = (path: any[]) => {
    if (path.length === nums.length) {
      res.push(path)
      return
    }

    nums.forEach(item => {
      if (path.includes(item)) return
      // concat返回一个新数组
      backtrack(path.concat(item))
    })
  }
  backtrack([])
  return res
}

export { }