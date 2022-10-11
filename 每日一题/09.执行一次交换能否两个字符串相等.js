// https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal/solution/

var areAlmostEqual = function(s1, s2) {
  if(s1 === s2) return true

  const len = s1.length
  let str1 = ''
  let str2 = ''

  for(let i = 0; i < len; i++) {
     if(s1[i] !== s2[i]) {
         str1 += s1[i]
         str2 += s2[i]
         if(str1.length >2 || str2.length > 2) {
             return false
         }
     }
  }

  if(str1.length !== 2 || str2.length !== 2) return false

  str1 = str1[1] + str1[0]

  return str1 === str2
};