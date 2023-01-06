// https://leetcode.cn/problems/count-integers-with-even-digit-sum/description/

function countEven(num: number): number {
  let count: number = 0
  for (let i = 1; i <= num; i++) {
    let temp = i, sum = 0
    while (temp !== 0) {
      sum += temp % 10
      // 这里需要向下取整 不然temp就是浮点数(js会保留小数)
      temp = Math.floor(temp / 10)
    }
    if (!(sum % 2)) count++
  }
  return count
};

export { }