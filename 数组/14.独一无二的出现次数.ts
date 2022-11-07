// https://leetcode.cn/problems/unique-number-of-occurrences/solutions/

function uniqueOccurrences(arr: number[]): boolean {
  const map:Map<number, number> = new Map()
  arr.forEach(value => {
      map.set(value, (map.get(value) || 0) + 1)
  })
  // map.values拿到一个迭代器 通过.value拿到就是键值对中的value
  // set中数据不会重复 如果每个数出现次数都是独一无二 那么map和set大小一样
  return map.size === new Set(map.values()).size
};