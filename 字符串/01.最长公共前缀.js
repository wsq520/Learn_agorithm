// 什么叫公共前缀？
// 那么肯定是从第一个字符开始匹配！！！

var longestCommonPrefix = function (strs) {
  if (!strs.length) return ''
  let res = strs[0]
  for (let i = 1; i < strs.length; i++) {
    // slice方法截取[startIndex，endIndex)之间的字符
    // 字符串调用slice方法时 如果参数endIndex >= 本身的length 那么都是返回原来的字符串
    while (res !== strs[i].slice(0, res.length)) {
      res = res.slice(0, res.length - 1)
    }
  }
  return res
};
