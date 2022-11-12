// 二分查找是针对有序数组的

Array.prototype.binarySearch = function (item) {
  let low = 0, high = this.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (this[mid] === item) {
      return mid
    } else if (this[mid] > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}

const arr = [1, 4, 5, 9, 18, 56]
console.log(arr.binarySearch(10))