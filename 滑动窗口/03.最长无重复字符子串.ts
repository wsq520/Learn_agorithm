// https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/?languageTags=typescript

function lengthOfLongestSubstring(s: string): number {
  let left: number = 0
  let res: number = 0
  // 利用map记录已经出现的字符 遇到重复字符就更新left指针 
  const map = new Map()
  for (let right = 0; right < s.length; right++) {
    // 如果当前字符出现过 需要开始滑动窗口 也就是更新Left指针
    // 为什么需要map.get(s[right]) >= left？
    // 比如 abcdeak
    // 虽然 a 前面已经出现过 但是遇到最后一个 a 时 left已经移动到了b处 此时子串范围是 bcdeak 子串的a下标是大于left的
    // 也就是说 即使某个字符重复出现了 并且该字符此前被包含在子串中 此时才开始滑动窗口更新left
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      left = map.get(s[right]) + 1
    }
    res = Math.max(res, right - left + 1)
    map.set(s[right], right)
  }
  return res
};