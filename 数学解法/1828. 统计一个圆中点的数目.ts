// https://leetcode.cn/problems/queries-on-number-of-points-inside-a-circle/description/

// 距离公式： (x1 - x2) + (y1- y2) 开方
function countPoints(points: number[][], queries: number[][]): number[] {
  const ans: number[] = new Array(queries.length).fill(0)

  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < points.length; j++) {
      const x = Math.abs(queries[i][0] - points[j][0])
      const y = Math.abs(queries[i][1] - points[j][1])
      const r = queries[i][2]
      const des = Math.sqrt(x ** 2 + y ** 2)
      if (des <= r) ans[i]++
    }
  }

  return ans
};

export { }