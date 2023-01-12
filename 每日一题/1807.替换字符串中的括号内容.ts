// https://leetcode.cn/problems/evaluate-the-bracket-pairs-of-a-string/

function evaluate(s: string, knowledge: string[][]): string {
  const map = new Map()
  // 键值对映射
  for (const item of knowledge) {
    map.set(item[0], item[1])
  }
  let res = '', key = ''
  let toChange = false
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (c === '(') {
      toChange = true
    } else if (c === ')') {
      if (toChange) {
        // 因为当前的key可能是不存在于map中 需要判断
        res += map.has(key) ? map.get(key) : '?'
      }
      toChange = false
      key = ''
    } else {
      // 如果读取当前字符之前没匹配的左括号 说明当前字符不在key中
      // 直接和结果字符串拼接即可
      if (toChange) {
        key += c
      } else {
        res += c
      }
    }
  }
  return res
};

export { }