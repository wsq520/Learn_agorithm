// https://leetcode.cn/problems/check-if-matrix-is-x-matrix/description/

function checkXMatrix(grid: number[][]): boolean {
  const n = grid[0].length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // i === j || (i + j + 1) === n 时 表明该点在的对角线上
      if (i === j || (i + j + 1) === n) {
        if (grid[i][j] === 0) {
          return false
        }
      } else if (grid[i][j] !== 0) {
        return false
      }
    }
  }
  return true
};

export { }