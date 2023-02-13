// https://leetcode.cn/problems/reverse-string-ii/description/

function reverseStr(s: string, k: number): string {
  const len = s.length
  const arr = Array.from(s)

  const reverse = (arr, left, right) => {
    while (right > left) {
      const temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left++
      right--
    }
  }

  for (let i = 0; i < len; i += 2 * k) {
    // 题目是反转 2k个字符中的前k个字符
    // Math.min(i + k, len) 可以知道后续字符串个数是否少于 k 个
    // - 1 是因为逻辑上为 2k 的字符对应的索引为 2k - 1 
    reverse(arr, i, Math.min(i + k, len) - 1)
  }
  return arr.join('')
};

export { }