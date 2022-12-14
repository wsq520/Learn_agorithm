// https://leetcode.cn/problems/second-largest-digit-in-a-string/description/?languageTags=javascript

function secondHighest(s: string): number {
  s = s.replace(/[a-z]+/ig, '')
  let arr = s.split('').filter(item => item !== '').map(item => Number(item))
  arr = arr.sort((a: number, b: number) => {
    return a - b
  })
  let res = [...new Set(arr)]
  return res[res.length - 2] !== undefined || null ? res[res.length - 2] : -1
};

export { }