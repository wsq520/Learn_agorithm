// https://leetcode.cn/problems/string-rotation-lcci/

var isFlipedString = function(s1, s2) {
  if(s1.length === 0 && s2.length === 0) {
      return true
  }
  if(s1.length !== s2.length) return false
  return (s2 + s2).indexOf(s1) >= 0 ? true : false
};