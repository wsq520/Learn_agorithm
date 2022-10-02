// https://leetcode.cn/problems/invert-binary-tree/submissions/

// 每个节点的左右子节点交换就是翻转
var invertTree = function(root) {
  if(!root) {
      return null
  }
  const rightNode = root.right
  root.right = invertTree(root.left)
  root.left = invertTree(rightNode)
  return root
};