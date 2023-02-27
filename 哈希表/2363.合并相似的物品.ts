// https://leetcode.cn/problems/merge-similar-items/description/

function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  const ret: number[][] = []

  const map = new Map()

  const help = (arr: number[][]) => {
    for (const [k, v] of arr) {
      if (map.has(k)) {
        map.set(k, map.get(k) + v)
      } else {
        map.set(k, v)
      }
    }
  }

  help(items1)
  help(items2)

  for (const [k, v] of map) {
    ret.push([k, v])
  }

  return ret.sort((a: number[], b: number[]) => a[0] - b[0])
};

export { }