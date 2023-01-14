// https://leetcode.cn/problems/single-number-ii/description/?languageTags=javascript

function singleNumber(nums: number[]): number {
  const map = new Map()
  for (const item of nums) {
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1)
  }
  let res = Infinity
  for (const [k, v] of map.entries()) {
    if (v === 1) {
      res = k
      break
    }
  }
  return res
};

export { }