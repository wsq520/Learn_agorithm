// https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

var reverseLeftWords = function (s, n) {
  let str = s.slice(0, n)
  let str2 = s.slice(n, s.length)
  return str2 + str
};