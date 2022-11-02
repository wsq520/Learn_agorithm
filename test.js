const arr = [1, 2, 3, 4, 5]

arr.every(i => {
  if (i > 3) {
    return false
  }
})

console.log(arr[-1])

console.log([].pop());

const map = new Map([["+",'hhhh'], ["-",'hhhh']])
console.log(map);