// https://leetcode.cn/problems/determine-color-of-a-chessboard-square/description/

function squareIsWhite(coordinates: string): boolean {
  let x = coordinates[0]
  let y = Number(coordinates[1])
  const str: string = 'aceg'
  if (str.includes(x)) {
    if (y % 2 === 0) {
      return true
    }
  } else {
    if (y % 2 !== 0) {
      return true
    }
  }
  return false
};

export { }