// 二分查找只针对已经排好序的数组
function binarySearch(array: number[], num: number) {
  let left = 0, right = array.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (array[mid] === num) return mid
    if (array[mid] > num) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

// console.log(binarySearch([1, 3, 5, 6, 17, 31], 6))
// console.log(performance.now())
export default binarySearch