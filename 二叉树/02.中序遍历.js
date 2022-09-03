var inorderTraversal = function(root) {
  const arr = []
  if(!root)
      return []
  const func = (root) => {
      if(!root)
          return;
      func(root.left)
      arr.push(root.val)
      func(root.right)
  }
  func(root)
  return arr
};