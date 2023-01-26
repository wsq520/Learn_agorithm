// https://leetcode.cn/problems/binary-tree-level-order-traversal/description/

// @ts-nocheck
function levelOrder(root: TreeNode | null): number[][] {
  let helperQueue: TreeNode[] = []
  let res: number[][] = []
  let tempArr: number[] = []
  let curNode: TreeNode

  if (root) helperQueue.push(root)

  // 只要 helperQueue.length 值不为 0 说明还存在节点没被遍历
  while (helperQueue.length) {
    const length = helperQueue.length
    for (let i = 0; i < length; i++) {
      // 每次都是拿到未遍历的最前的一个节点
      curNode = helperQueue.shift()
      tempArr.push(curNode.val)
      if (curNode.left) {
        helperQueue.push(curNode.left)
      }
      if (curNode.right) {
        helperQueue.push(curNode.right)
      }
    }
    res.push(tempArr)
    tempArr = []
  }
  return res
};

export { }