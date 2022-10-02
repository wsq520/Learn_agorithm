// https://leetcode.cn/problems/check-permutation-lcci/

var CheckPermutation = function(s1, s2) {
  const map1 = new Map()
  const map2 = new Map()
  for(let i = 0; i < s1.length; i++) {
      if(!map1.has(s1[i])) {
          map1.set(s1[i], 1)
      } else {
          map1.set(s1[i], map1.get(s1[i]) + 1)
      }
  }
  for(let i = 0; i < s2.length; i++) {
      if(!map2.has(s2[i])) {
          map2.set(s2[i], 1)
      } else {
          map2.set(s2[i], map2.get(s2[i]) + 1)
      }
  }
  // 如果size不相等 那么元素类型个数都不相等 直接返回false
  if(map1.size !== map2.size) return false
  for(const [k, v] of map1) {
      if(map2.has(k) && map2.get(k) === v) {
          continue
      }
      return false
  }
  return true
};