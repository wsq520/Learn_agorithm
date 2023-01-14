// https://leetcode.cn/problems/single-number-iii/description/?languageTags=javascript

function singleNumber(nums: number[]): number[] {
  const map = new Map()
  for (const item of nums) {
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1)
  }
  let res: number[] = []
  for (const [k, v] of map.entries()) {
    if (v === 1) {
      res.push(k)
      if (res.length === 2) break
    }
  }
  return res
};

export { }