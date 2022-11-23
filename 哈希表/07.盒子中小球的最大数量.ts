// https://leetcode.cn/problems/maximum-number-of-balls-in-a-box/description/?languageTags=javascript

function countBalls(lowLimit: number, highLimit: number): number {
  const map = new Map<number, number>()
  let res: number = 0
  for (let i = lowLimit; i <= highLimit; i++) {
    let box = 0
    let x = i
    while (x !== 0) {
      // box为盒子编号
      box += x % 10
      x = Math.floor(x / 10)
    }
    map.set(box, map.get(box) ? map.get(box)! + 1 : 1)
    res = Math.max(res, map.get(box)!)
  }
  return res
};

// {
//   "盒子1":"1个",
//   "盒子2":"3个"
// }

export {}