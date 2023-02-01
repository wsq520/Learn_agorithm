// https://leetcode.cn/problems/decode-the-message/

function decodeMessage(key: string, message: string): string {
  const str = 'abcdefghijklmnopqrstuvwxyz'
  const map = new Map<string, string>()
  let appearedChar = '' // 记录已经出现的字符串
  for (let i = 0; i < key.length; i++) {
    if (key[i] !== ' ' && appearedChar.indexOf(key[i]) === -1) {
      appearedChar += key[i]
      map.set(key[i], str[appearedChar.length - 1])
      if (appearedChar.length === 26) break
    } else {
      continue
    }
  }
  let res = ''
  for (const s of message) {
    res += map.get(s) ?? ' '
  }
  return res
};

decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")

// export { }