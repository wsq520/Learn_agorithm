// https://leetcode.cn/problems/valid-anagram/submissions/

// charCodeAt() 方法返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  // 题目已说明字符串由小写字母组成也就是a-z 而a-z的uncicode编码是连续的 那么就把a放在索引0处
  let hashArr: number[] = new Array(26).fill(0);
  let pivot: number = 'a'.charCodeAt(0);
  for (let i = 0, length = s.length; i < length; i++) {
    hashArr[s.charCodeAt(i) - pivot]++;
    hashArr[t.charCodeAt(i) - pivot]--;
  }
  return hashArr.every(i => i === 0);
};