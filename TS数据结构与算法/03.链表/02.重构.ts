class Node<T> {
  value: T
  next: Node<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0

  get length() {
    return this.size
  }

  private getNode(position: number): Node<T> | null {
    let current = this.head
      let index = 0
      while (index++ < position && current) {
        current = current.next
      }
    return current
  }

  append(value: T) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
    } else {
      let currentNode = this.head
      // 找到最后一个结点
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }

    this.size++
  }

  // 遍历链表
  traverse() {
    const values: T[] = []
    let currentNode = this.head
    while (currentNode) {
      values.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(values.join(' ->'))
  }

  // 指定位置插入结点
  insert(value: T, position: number): boolean {
    if (position < 0 || position > this.size) return false

    const newNode = new Node(value)
    // 在头部插入结点
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      const previous = this.getNode(position - 1)
      newNode.next = previous!.next
      previous!.next = newNode
    }
    this.size++
    return true
  }

  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) return null

    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      const previous = this.getNode(position - 1)
      current = previous?.next ?? null
      previous!.next = previous?.next?.next ?? null
    }

    this.size--

    return current?.value ?? null
  }

  get(position: number): T | null {
    if(position < 0 || position >= this.size) return null

    return this.getNode(position)?.value ?? null
  }
}

const linkedlist = new LinkedList<string>()
linkedlist.append('aaa')
linkedlist.append('bbb')
linkedlist.traverse()
linkedlist.insert('ccc', 2)
linkedlist.traverse()
console.log(linkedlist.get(0))

export { }