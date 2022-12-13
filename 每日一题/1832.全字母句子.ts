// https://leetcode.cn/problems/check-if-the-sentence-is-pangram/description/?languageTags=javascript

function checkIfPangram(sentence: string): boolean {
  if (sentence.length < 26) return false
  const map = new Map()
  for (const char of sentence) {
    if (map.has(char)) {
      let value = map.get(char)
      map.set(char, value + 1)
    } else {
      map.set(char, 1)
    }
  }
  return map.size >= 26
};

export {}