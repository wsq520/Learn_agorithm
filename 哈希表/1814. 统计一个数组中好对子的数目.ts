// https://leetcode.cn/problems/count-nice-pairs-in-an-array/description/?languageTags=javascript

function countNicePairs(nums: number[]): number {
  // 整数反转
  function rev(num) {
    let v = 0
    while (num) {
      v = v * 10 + (num % 10)
      num = Math.floor(num / 10)
    }
    return v
  }
  // 题目要求 i < j 且存在 nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
  // 转换公式：nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])
  const MOD = 1e9 + 7
  // 每个索引对应的元素是 nums[i] - rev(nums[i])
  // 此时的问题就转换成：在数组中找到 i < j 且nums[i]===nums[j] 注意：此时nums[i]的元素是经过公式计算的
  nums = nums.map(item => item - rev(item))

  let ans = 0, map = new Map()
  for (let i = 0; i < nums.length; i++) {
    // 如果当前元素首次出现 那么value为0 这样子就可以统计索引大的且和他相同的值的个数有多少个
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 0)
    }
    ans = (ans + map.get(nums[i])) % MOD
  }

  return ans
};

export { }