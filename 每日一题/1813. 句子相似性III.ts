// https://leetcode.cn/problems/sentence-similarity-iii/description/

function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  const s1: string[] = sentence1.split(' ')
  const s2: string[] = sentence2.split(' ')
  let i = 0, j = 0
  while (i < s1.length && i < s2.length && s1[i] === s2[i]) {
    i++
  }
  const length: number = Math.min(s1.length - i, s2.length - i)
  while (j < length && s1[s1.length - 1 - j] === s2[s2.length - 1 - j]) {
    j++
  }
  return i + j === Math.min(s1.length, s2.length)
};

export { }