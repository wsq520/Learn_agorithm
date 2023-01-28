// https://leetcode.cn/problems/count-asterisks/

function countAsterisks(s: string): number {
  const arr: string[] = s.split('|')
  let res = 0

  const countStar = (str: string) => {
    let count: number = 0
    for (const s of str) {
      if (s === '*') count++
    }
    return count
  }

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      res += countStar(arr[i])
    }
  }

  return res
};

countAsterisks('yo|uar|e**|b|e***au|tifu|l')

export { }