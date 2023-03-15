import IStack from "./IStack"

class ArrayStack<T> implements IStack<T>{
  private data: T[] = []

  push(element: T): void {
    this.data.push(element)
  }

  // 移除栈顶元素并且返回该元素的值
  pop(): T | undefined {
    return this.data.pop()
  }

  // 返回栈顶元素的值 不会删除栈顶元素
  peek(): any {
    return this.data[this.data.length - 1]
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }

  size(): number {
    return this.data.length
  }
}

const stack1 = new ArrayStack<string>()

stack1.push('aaa')
stack1.push('bbb')
stack1.push('ccc')

export { }