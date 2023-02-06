// https://leetcode.cn/problems/evaluate-boolean-binary-tree/description/

// @ts-nocheck
function evaluateTree(root: TreeNode | null): boolean {
  if (!root) return false

  // 如果是叶子节点
  if (!root.left) {
    return root.val === 1
  }

  if (root.val === 2) {
    // evaluateTree(root.left) evaluateTree(root.right)分别计算左右子树的值
    return evaluateTree(root.left) || evaluateTree(root.right)
  } else {
    return evaluateTree(root.left) && evaluateTree(root.right)
  }
};

export { }