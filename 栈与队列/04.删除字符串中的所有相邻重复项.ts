// https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/submissions/

function removeDuplicates(s: string): string {
  let helpArr: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (helpArr.length && helpArr[helpArr.length - 1] === s[i]) {
      helpArr.pop()
    } else {
      helpArr.push(s[i])
    }
  }
  return helpArr.join('')
};