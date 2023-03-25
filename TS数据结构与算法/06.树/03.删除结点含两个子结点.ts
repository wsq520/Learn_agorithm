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
  parent: TreeNode<T> | null = null

  // 判断当前结点是左子结点还是右子结点
  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this)
  }

  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this)
  }
}

class BSTree<T> {
  private root: TreeNode<T> | null = null

  print() {
    btPrint(this.root)
  }

  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root
    let parent: TreeNode<T> | null = null
    while (current) {
      if (current.value === value) {
        return current
      }

      parent = current
      if (current.value < value) {
        current = current.right
      } else {
        current = current.left
      }

      // 保存父节点
      if (current) {
        current.parent = parent
      }
    }
    // 这里表示遍历整棵树都找不到指定结点
    return null
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
    // !! 返回的是一个布尔值
    return !!this.searchNode(value)
  }

  private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    let current = delNode.right
    let successor: TreeNode<T> | null = null // 记录被删结点的后继结点
    while (current) {
      successor = current
      current = current.left
      if (current) {
        current.parent = successor
      }
    }

    if (successor !== delNode.right) {
      successor!.parent!.left = successor!.right
      successor!.right = delNode.right
    }

    successor!.left = delNode.left

    return successor!
  }

  // 删除
  remove(value: T): boolean {
    // 获取被删除结点
    const current = this.searchNode(value)
    // 如果被删结点不存在 直接返回 false
    if (!current) return false

    // console.log("被删节点", current?.value, "其父节点", current?.parent?.value)

    // 如果被删结点是一个叶子结点
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null
      } else if (current.isLeft) {
        current.parent!.left = null
      } else {
        current.parent!.right = null
      }
    }

    // 如果被删结点只有左子结点
    if (current.left && !current.right) {
      if (current === this.root) {
        this.root = current.left
      } else if (current.isLeft) {
        // 判断被删结点是属于其父结点的左/右子节点 然后将自己的左子节点作为它父结点的子结点
        current.parent!.left = current.left
      } else {
        current.parent!.right = current.left
      }
    }

    // 如果被删结点只有右子结点
    if (current.right && !current.left) {
      if (current === this.root) {
        this.root = current.right
      } else if (current.isLeft) {
        current.parent!.left = current.right
      } else {
        current.parent!.right = current.right
      }
    }

    // 前驱结点：左子树中最大值
    // 后继结点：右子树中最小值
    // 将前驱或后继结点替换被删结点都可以
    if (current.left && current.right) {
      // 拿到后继结点
      const successor = this.getSuccessor(current)
      if (current === this.root) {
        this.root = successor
      } else if (current.isLeft) {
        current.parent!.left = successor
      } else {
        current.parent!.right = successor
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
bst.remove(10)
export { }