// https://leetcode.cn/problems/symmetric-tree/

var isSymmetric = function(root) {
  const compareNode=function(left, right) {
      if(left !== null && right === null) {
          return false
      } else if(left === null && right !== null) {
          return false
      } else if(left === null && right === null) {
          return true
      } else if(left.val !== right.val) {
          return false
      }

      let outSide = compareNode(left.left, right.right)
      let inSide = compareNode(left.right, right.left)
      return outSide&&inSide
  }
  if(root === null) return true

  return compareNode(root.left, root.right)
};