// https://leetcode.cn/problems/valid-parentheses/submissions/

function isValid(s: string): boolean {
  type CharMap = {
      // key value类型都是string
      [index:string]:string
  }
  let helperArr:string [] = []
  let charmap:CharMap = {
      '(': ')',
      '{':'}',
      '[':']'
  }
  for(const item of s) {
      if(charmap[item]) {
          helperArr.push(charmap[item])
      } else if(item !== helperArr.pop()) {
          return false
      }
  }
  return helperArr.length === 0
};