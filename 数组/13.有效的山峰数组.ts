// https://leetcode.cn/problems/valid-mountain-array/solutions/

function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) return false
  let left: number = 0
  let right: number = arr.length - 1
  const length: number = arr.length
  while (left < (length - 1) && arr[left] < arr[left + 1]) {
    left++
  }
  while (right > 0 && arr[right] < arr[right - 1]) {
    right--
  }
  // left和right相遇的位置就是山峰 山峰左边是递增序列 右边是递减序列
  if (left === right && left !== 0 && right !== length - 1) {
    return true
  }
  return false
};