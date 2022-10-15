// https://leetcode.cn/problems/maximum-depth-of-binary-tree/

var maxDepth = function(root) {
  if(!root) {
      return 0
  }
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  return Math.max(left, right) + 1
};