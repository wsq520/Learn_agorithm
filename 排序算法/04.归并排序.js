Array.prototype.mergerSort = function () {
  const help = (arr) => {
    // 数组元素个数为1时 不需要再切割 直接返回
    if (arr.length === 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)
    const leftRes = help(left)
    const rightRes = help(right)
    const res = []

    while (leftRes.length || rightRes.length) {
      if (leftRes.length && rightRes.length) {
        res.push(leftRes[0] < rightRes[0] ? leftRes.shift() : rightRes.shift())
      } else if (leftRes.length) {
        // 如果左边数组不为空 右边数组为空
        res.push(leftRes.shift())
      } else if (rightRes) {
        res.push(rightRes.shift())
      }
    }
    return res
  }

  const res = help(this)
  // res.forEach((value, index) => {
  //   this[index] = value
  // })
  return res
}

const arr = [3, 2, 4, 1]
console.log(arr.mergerSort())