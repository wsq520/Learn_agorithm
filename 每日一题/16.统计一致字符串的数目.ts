// https://leetcode.cn/problems/count-the-number-of-consistent-strings/solutions/?languageTags=javascript

// 方法一：
function countConsistentStrings(allowed: string, words: string[]): number {
  const handle = (str: string, words: string): boolean => {
    for (const item of str) {
      let re = new RegExp(item, 'g')
      words = words.replace(re, '')
    }
    return words.length === 0
  }

  let res: number = 0
  for (const item of words) {
    if (handle(allowed, item)) {
      res++
    }
  }
  return res
};


// 方法2：
function countConsistentStrings2(allowed: string, words: string[]): number {
  const set = new Set(allowed)
  let res: number = 0
  for (const word of words) {
    let flag = true
    for (const char of word) {
      if (!set.has(char)) {
        flag = false
        break
      }
    }
    if (flag) res++
  }
  return res
};

export { }