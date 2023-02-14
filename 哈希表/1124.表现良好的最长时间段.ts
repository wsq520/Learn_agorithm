// https://leetcode.cn/problems/longest-well-performing-interval/description/?languageTags=javascript

// 哈希表 + 前缀和
function longestWPI(hours: number[]): number {
  const n = hours.length
  let res = 0, sum = 0
  const map = new Map()

  for (let i = 0; i < n; i++) {
    sum += hours[i] > 8 ? 1 : -1

    if (sum > 0) {
      res = Math.max(res, i + 1)
    } else {
      if (map.has(sum - 1)) {
        res = Math.max(res, i - map.get(sum - 1))
      }
    }
    if (!map.has(sum)) map.set(sum, i)
  }

  return res
};

export { }