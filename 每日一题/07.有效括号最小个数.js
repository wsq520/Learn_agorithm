// https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid/

var minAddToMakeValid = function (s) {
  const len = s.length
  let leftCount = 0
  let res = 0
  for (let i = 0; i < len; i++) {
    if (s[i] === '(') {
      leftCount++
    } else {
      if (leftCount > 0) {
        leftCount--
      } else {
        res++
      }
    }
  }
  res += leftCount
  return res
};