function areNumbersAscending(s: string): boolean {
  let arr: number[] = s.match(/\d+/ig)!.map((item: string) => Number(item))
  let res: boolean = true
  arr.every((item, index, ayy) => {
    if (ayy[index - 1] && ayy[index - 1] >= item) {
      res = false
    }
    return true
  })
  return res
};

areNumbersAscending("hello world 5 x 5")

function areNumbersAscending2(s: string): boolean {
  let arr: number[] = s.match(/\d+/ig)!.map((item: string) => Number(item))
  return arr.every((item, index, ayy) => {
    return index === 0 || ayy[index - 1] < item
  })
};

export { }