function sequentSearch(array: number[], num: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) return i
  }
  return -1
}

// console.log(sequentSearch([1, 2, 5, 3, 6, 99, 100], 5))
// console.log(sequentSearch([1, 2, 5, 3, 6, 99, 100], 0))

export default sequentSearch