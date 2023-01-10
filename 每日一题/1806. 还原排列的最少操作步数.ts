// https://leetcode.cn/problems/minimum-number-of-operations-to-reinitialize-a-permutation/description/

function reinitializePermutation(n: number): number {
  let perm: number[] = new Array(n).fill(0).map((_, index) => index)
  const temp: number[] = new Array(n).fill(0).map((_, index) => index)
  let res: number = 0
  while (1) {
    const arr = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        arr[i] = perm[Math.floor(i / 2)]
      } else {
        arr[i] = perm[Math.floor(n / 2) + Math.floor(i - 1) / 2]
      }
    }
    perm = arr
    res++
    // 利用数组的toString方法 将数组元素转换成字符串比较数组内容是否相等
    if (perm.toString() === temp.toString()) {
      break
    }
  }
  return res
};

export { }