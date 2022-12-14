// https://leetcode.cn/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/description/

function nearestValidPoint(x: number, y: number, points: number[][]): number {
  const map = new Map()
  // 从后开始遍历 那么相同的距离 索引小的点覆盖索引大的 而题目要求就是返回索引小的
  for (let i = points.length - 1; i >= 0; i--) {
    let [x2, y2] = points[i]
    if (x === x2 || y === y2) {
      let distance = Math.abs(x - x2) + Math.abs(y - y2)
      map.set(distance, i)
    }
  }
  let min = Number.MAX_SAFE_INTEGER, index = -1
  // map中的key是距离 而value对应的就是形成该距离的那个点在数组points中的索引
  for (let i of map.keys()) {
    if (min > i) {
      min = Number(i)
      index = map.get(i)
    }
  }
  return index
};

export { }