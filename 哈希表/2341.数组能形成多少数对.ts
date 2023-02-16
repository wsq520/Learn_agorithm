// https://leetcode.cn/problems/maximum-number-of-pairs-in-array/description/

// 哈希表
function numberOfPairs(nums: number[]): number[] {
  const cnt = new Map();
  let res = 0;
  for (const num of nums) {
    cnt.set(num, !(cnt.get(num) || false));
    if (!cnt.get(num)) {
      res++;
    }
  }
  return [res, nums.length - 2 * res];
}

// 遍历比较前后两个元素是否相等
function numberOfPairs2(nums: number[]): number[] {
  const ans: number[] = []
  let res = 0, i = 0

  nums.sort((a, b) => a - b)

  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      res++
      i += 2
    } else {
      i++
    }
  }

  ans.push(res)
  ans.push(nums.length - (2 * res))

  return ans
}

export { }