// https://leetcode.cn/problems/determine-if-string-halves-are-alike/description/

function halvesAreAlike(s: string): boolean {
  // 把属于判断条件的字符组成一个字符串
  const str: string = 'aeiouAEIOU'
  const left: string = s.slice(0, s.length / 2)
  const right: string = s.slice(s.length / 2, s.length)
  let res1 = 0, res2 = 0
  for (const s of left) {
    if (str.indexOf(s) !== -1) {
      res1++
    }
  }
  for (const s of right) {
    if (str.indexOf(s) !== -1) {
      res2++
    }
  }
  return res1 === res2
};