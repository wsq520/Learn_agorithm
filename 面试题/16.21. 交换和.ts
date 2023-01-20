// https://leetcode.cn/problems/sum-swap-lcci/description/

function findSwapValues(array1: number[], array2: number[]): number[] {
  let sum1: number = array1.reduce((pre, cur) => pre + cur)
  let sum2: number = array2.reduce((pre, cur) => pre + cur)

  // 去重可以减少重复元素遍历次数
  array1 = [...new Set(array1)]
  array2 = [...new Set(array2)]

  for (let i = 0; i < array1.length; i++) {
    sum1 -= array1[i]
    sum2 += array1[i]
    for (let j = 0; j < array2.length; j++) {
      if (sum1 + array2[j] === sum2 - array2[j]) {
        return [array1[i], array2[j]]
      }
    }
    sum1 += array1[i]
    sum2 -= array1[i]
  }

  return []
};

export {}