// https://leetcode.cn/problems/number-of-different-integers-in-a-string/description/?languageTags=javascript

function numDifferentIntegers(word: string): number {
  const re = /[a-z]+/ig
  let arr = word.split(re)
  if (arr[arr.length - 1] === '') arr.pop()
  if (arr[0] === '') arr.shift()
  let newArr = arr.map(item => {
    return item[0] === '0' ? item.replace(/0+/, '') : item
  })
  return new Set(newArr).size
};

export { }