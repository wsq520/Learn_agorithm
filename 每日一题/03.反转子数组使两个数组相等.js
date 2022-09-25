// https://leetcode.cn/problems/make-two-arrays-equal-by-reversing-subarrays/

var canBeEqual = function (target, arr) {
  const tMap = new Map()
  const aMap = new Map()
  for (const item of target) {
    if (tMap.has(item)) {
      tMap.set(item, tMap.get(item) + 1)
    } else {
      tMap.set(item, 1)
    }
  }
  for (const item of arr) {
    if (aMap.has(item)) {
      aMap.set(item, aMap.get(item) + 1)
    } else {
      aMap.set(item, 1)
    }
  }
  if (tMap.size !== aMap.size) return false
  const allKeys = aMap.entries()
  for (const [key, value] of allKeys) {
    if (!(tMap.has(key)) || tMap.get(key) !== value) {
      return false
    }
  }
  return true
};