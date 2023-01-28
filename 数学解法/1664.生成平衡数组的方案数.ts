// https://leetcode.cn/problems/ways-to-make-a-fair-array/description/?languageTags=javascript

function waysToMakeFair(nums: number[]): number {
  let res = 0
  let evenSum = 0
  let oddSum = 0
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 !== 0) {
      evenSum += nums[i]
    } else {
      oddSum += nums[i]
    }
  }

  let preEvenSum = 0
  let preOddSum = 0
  for (let i = 0; i < nums.length; i++) {
    const symbol = i % 2 === 0 ? 1 : -1
    if (preEvenSum + oddSum - symbol * nums[i] === preOddSum + evenSum) {
      res++
    }
    if (symbol === 1) {
      preOddSum += nums[i]
      oddSum -= nums[i]
    } else {
      preEvenSum += nums[i]
      evenSum -= nums[i]
    }
  }

  return res
};

waysToMakeFair([2, 1, 6, 4])

export { }