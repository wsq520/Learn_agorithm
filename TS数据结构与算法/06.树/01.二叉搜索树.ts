import { btPrint } from 'hy-algokit'

class INode<T> {
  value: T

  constructor(value: T) {
    this.value = value
  }
}

class TreeNode<T> extends INode<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
}

class BSTree<T> {
  private root: TreeNode<T> | null = null

  print() {
    btPrint(this.root)
  }

  insert(value: T) {
    const newNode = new TreeNode(value)

    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) { // 在左子树找位置
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else { // 在右子树找位置
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }

  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value)
      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
    }
  }

  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }

  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inOrderTraverseNode(node.left)
      console.log(node.value)
      this.inOrderTraverseNode(node.right)
    }
  }

  // 后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }

  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left)
      this.postOrderTraverseNode(node.right)
      console.log(node.value)
    }
  }

  // 层序遍历
  levelOrderTraverse() {
    if (!this.root) return

    const queue: TreeNode<T>[] = []
    queue.push(this.root)

    while (queue.length) {
      // shift移除数组第一个元素 也就是队列的队头元素
      const current = queue.shift()!
      console.log(current.value)

      if (current.left) {
        queue.push(current.left)
      }

      if (current.right) {
        queue.push(current.right)
      }
    }
  }

  // 获取最大值
  getMaxValue(): T | null {
    let current = this.root
    while (current && current.right) {
      current = current.right
    }
    return current?.value ?? null
  }

  // 获取最小值
  getMinValue(): T | null {
    let current = this.root
    while (current && current.left) {
      current = current.left
    }
    return current?.value ?? null
  }

  // 搜索某个值
  search(value: T): boolean {
    let current = this.root
    while (current) {
      if (current.value === value) {
        return true
      }
      if (current.value < value) {
        current = current.right
      } else {
        current = current.left
      }
    }
    return false
  }

  // 删除
  remove(value: T): boolean {
    let current = this.root
    // 保存被删除结点的父节点
    let parent: TreeNode<T> | null = null
    while (current) {
      if (current.value === value) break

      parent = current
      if (current.value < value) {
        current = current.right
      } else {
        current = current.left
      }
    }
    return true
  }
}

const bst = new BSTree()
bst.insert(10)
bst.insert(20)
bst.insert(9)
bst.print()
// bst.preOrderTraverse()
// bst.inOrderTraverse()
// bst.postOrderTraverse()
// bst.levelOrderTraverse()
// console.log(bst.search(10), bst.search(11))

export { }