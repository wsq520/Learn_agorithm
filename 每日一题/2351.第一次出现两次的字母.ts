// https://leetcode.cn/problems/first-letter-to-appear-twice/description/?languageTags=javascript
function repeatedCharacter(s: string): string {
  let res: string = ''
  for (let i = 0; i < s.length; i++) {
    // indexOf总是返回当前元素首次出现的位置
    // 如果第一次出现的位置不等于当前的位置i 则当前位置i是该字符第二次出现了 保存该字符并结束循环
    // 如果第一次出现的位置和当前位置i相等 则说明当前位置i是该字符首次出现 不做处理继续循环
    if (s.indexOf(s[i]) !== i) {
      res = s[i]
      break
    }
  }
  return res
};

export {}