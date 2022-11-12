Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length; i++) {
    let index = i
    for (let j = i + 1; j < this.length; j++) {
      // 找到最小值对应的索引
      if (this[index] > this[j]) {
        index = j
      }
    }
    let temp = this[i]
    this[i] = this[index]
    this[index] = temp
  }
  return this
}

const arr = [1, 1, 4, 2, 3, 6, 3, 5, 8, 10, 9]
console.log(arr.selectionSort())

