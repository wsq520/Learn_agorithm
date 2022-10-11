// https://leetcode.cn/problems/ti-huan-kong-ge-lcof/submissions/

var replaceSpace = function(s) {
  const re = /\s/ig
  return s.replace(re, '%20')
};