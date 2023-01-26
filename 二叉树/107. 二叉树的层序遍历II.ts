// https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/description/?languageTags=javascript

// @ts-nocheck
function levelOrderBottom(root: TreeNode | null): number[][] {
  let curNode: TreeNode
  let tempArr: number[] = []
  const heplerQueue: TreeNode[] = []
  const res: number[][] = []

  if (root) heplerQueue.push(root)

  while (heplerQueue.length) {
    const length = heplerQueue.length
    for (let i = 0; i < length; i++) {
      curNode = heplerQueue.shift()
      tempArr.push(curNode.val)
      if (curNode.left) heplerQueue.push(curNode.left)
      if (curNode.right) heplerQueue.push(curNode.right)
    }

    res.push(tempArr)
    tempArr = []
  }
  // 这题和102不同就是最后将数组反转即可
  return res.reverse()
};

export { }