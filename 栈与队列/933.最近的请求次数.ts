// https://leetcode.cn/problems/number-of-recent-calls/description/
// 使用队列结构
class RecentCounter {
  constructor(public q) {
    this.q = []
  }

  ping(t: number): number {
    this.q.push(t)
    // 将此刻之前的3000ms push进来的请求删除 
    while (this.q[0] < t - 3000) {
      this.q.shift()
    }
    return this.q.length
  }
}