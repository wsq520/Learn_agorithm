var preorderTraversal = function(root) {
  let arr = []
  const func = function(root) {
      if(root === null) {
          return
      }
      if(root.val !== null){
          arr.push(root.val)
      }
      func(root.left)
      func(root.right) 
  }
  func(root)
  return arr
};