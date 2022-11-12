Array.prototype.quickSort = function () {
  const help = (arr) => {
    if (arr.length <= 1) {
      return arr
    }

    const left = []
    const right = []
    const base = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < base) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...help(left), base, ...help(right)]
  }

  // const res = help(this)
  return help(this)
}

const arr = [1, 3, 4, 2, 10, 9, 5]
console.log(arr.quickSort())