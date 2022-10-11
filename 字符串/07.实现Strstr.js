// https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/submissions/

var strStr = function(haystack, needle) {
  // 注意的是：这里创建正则表达式时 需要通过new RegExp来创建 这样子才会匹配needle对应的字符
  // 如果直接是 /(needle)/是匹配字符串needle 而不是匹配needle对应的变量值
  const re = new RegExp(needle, "ig")
  let res = haystack.matchAll(re)?.next().value?.index 
  return res >= 0 ? res : -1
};

// 直接调用字符串的indexOf更方便