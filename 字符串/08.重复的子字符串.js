// https://leetcode.cn/problems/repeated-substring-pattern/submissions/

var repeatedSubstringPattern = function(s) {
  const len = s.length
  let str = ''
  for(let i = 0; i < len - 1; i++) {
      str += s[i]
      if(s.length % s.length === 0) {
          if(str.repeat(s.length / str.length) === s) {
              return true
          }
      }
  }
  return false
};