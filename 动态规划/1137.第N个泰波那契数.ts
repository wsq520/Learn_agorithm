// https://leetcode.cn/problems/n-th-tribonacci-number/description/

function tribonacci(n: number): number {
  const arr: number[] = [0, 1, 1]
  if (n <= 2) return arr[n]
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3]
  }
  return arr[n]
};

export { }