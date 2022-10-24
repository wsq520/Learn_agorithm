// https://leetcode.cn/problems/merge-strings-alternately/submissions/

function mergeAlternately(word1: string, word2: string): string {
  let res = ''
  const len1 = word1.length
  const len2 = word2.length
  let i = 0, j = 0
  while (i < len1 || j < len2) {
    if (i < len1) {
      res += word1[i++]
    }
    if (j < len2) {
      res += word2[j++]
    }
  }
  return res
};