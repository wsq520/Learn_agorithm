// https://leetcode.cn/problems/check-if-number-has-equal-digit-count-and-digit-value/description/

function digitCount(num: string): boolean {
  const map = new Map()

  for (const item of num) {
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1)
  }
  let count: number = 0
  for (let i = 0; i < num.length; i++) {
    // 这里需要判断String(i)是否存在map中 不存在 其出现次数是0 否则会返回undefined
    count = map.get(String(i)) ? map.get(String(i)) : 0
    if (count !== Number(num[i])) {
      return false
    }
  }

  return true
};

digitCount("1")

export { }