Array.prototype.insertSort = function () {
  for (let i = 1; i < this.length; i++) {
    let j = i
    let temp = this[i]
    while (j > 0) {
      if (temp < this[j - 1]) {
        this[j] = this[j - 1]
      } else {
        break
      }
      j--
    }
    this[j] = temp
  }
  return this
}

const arr = [3, 2, 5, 4, 1]
console.log(arr.insertSort())