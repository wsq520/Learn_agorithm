// https://leetcode.cn/problems/minimum-window-substring/description/

function minWindow(s: string, t: string): string {
  let left = 0, right = 0
  // map存储每个字符 及每个字符需要几个
  const need = new Map()
  for (const c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1)
  }
  // 记录一共有几种字符
  let needType = need.size
  let res: string = ''
  while (right < s.length) {
    const c = s[right]
    if (need.has(c)) {
      need.set(c, need.get(c) - 1)
      // 如果某个字符个数已经被包含完了 那么needType-1
      if (need.get(c) === 0) needType--
    }
    // 所有字符及个数都被包含之后 开始移动左指针 减少字符串的长度
    while (needType === 0) {
      // substring方法是左闭右开 所以+1
      const newRes = s.substring(left, right + 1)
      // 初始化res为空字符串 那么直接把newRes赋值给它
      if (!res || newRes.length < res.length) res = newRes
      const c2 = s[left]
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1)
        if (need.get(c2) === 1) needType++
      }
      left++
    }
    right++
  }
  return res
}

export { }