// https://leetcode.cn/problems/reverse-words-in-a-string/submissions/

var reverseWords = function(s) {
  // re匹配一个或多个空格
  const re = /\s+/ig
  // 先将首尾空格去掉
  let str = s.trim()
  // 注意：reverse()是数组的方法
  return str.split(re).reverse().join(' ')
};