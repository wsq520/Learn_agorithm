// https://leetcode.cn/problems/goal-parser-interpretation/solutions/?languageTags=javascript

var interpret = function (command) {
  // 加个 g 就可以把所有的匹配项给替换
  // 字符串的replaceAll方法用不了正则表达式
  const re1 = /\(\)/g
  const re2 = /\(al\)/g
  return command.replace(re1, "o").replace(re2, "al")
};