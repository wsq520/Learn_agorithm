var postorderTraversal = function(root) {
  const arr = []
  const func = function(root) {
      if(root === null) return
      func(root.left)
      func(root.right)
      if(root.val !== null) {
          arr.push(root.val)
      }
  }
  func(root)
  return arr
};