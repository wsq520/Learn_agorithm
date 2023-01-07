// https://leetcode.cn/problems/minimum-operations-to-reduce-x-to-zero/description/?languageTags=javascript

// 思路：维持窗口最长的同时 保证窗口之外的数的总和等于 x
function minOperations(nums: number[], x: number): number {
  const total: number = nums.reduce((preV, curV) => {
    return preV + curV
  }, 0)
  if (total < x) return -1
  let sum = 0, res = Infinity
  let l = 0, r = 0
  while (r < nums.length) {
    sum += nums[r]
    // 当total-sum即窗口之外的数总和 小于 x 应该收缩窗口 
    while (total - sum < x) {
      sum -= nums[l]
      l++
    }
    // 窗口之外的数之和 等于 x 找出符合此情况下 窗口之外数字元素个数最小长度
    if (total - sum === x) {
      res = Math.min(res, nums.length - (r - l + 1))
      console.log(res)
    }
    r++
  }
  return res === Infinity ? -1 : res
};

minOperations([1, 1, 4, 2, 3], 5)
export { }