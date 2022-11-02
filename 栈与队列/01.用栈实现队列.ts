// https://leetcode.cn/problems/implement-queue-using-stacks/comments/

class MyQueue {
  public stackIn: number[]
  public stackOut: number[]
  constructor() {
      this.stackIn = []
      this.stackOut = []
  }

  push(x: number): void {
      this.stackIn.push(x)
  }

  pop(): number {
      if(!this.stackOut.length) {
          // 将stackIn的全部数据移动到stackOut里面
          while(this.stackIn.length > 0) {
              this.stackOut.push(this.stackIn.pop()!)
          }
      }
      // 此时stackOut的最后一个元素就是此时队列第一个元素
      return this.stackOut.pop()!
  }

  peek(): number {
      let res:number = this.pop()
      this.stackOut.push(res)
      return res
  }

  empty(): boolean {
      return !this.stackIn.length && !this.stackOut.length
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/