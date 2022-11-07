// https://leetcode.cn/problems/daily-temperatures/description/?languageTags=javascript

function dailyTemperatures(temperatures: number[]): number[] {
  const len: number = temperatures.length
  const stack: number[] = []
  const res: number[] = new Array(len).fill(0)
  stack.push(0)
  for (let i = 1; i < len; i++) {
    let top = stack[stack.length - 1]
    // 考虑stack.length的原因是之前有些天数的下一天温度不比当天温度大 只能先保存当前的索引 在后面找比它大的
    // 这里只是比较紧挨着两天的温度 所以必须记录那些暂时占不到比它温度大的天数的索引
    while (stack.length && temperatures[i] > temperatures[top]) {
      res[top] = i - top
      stack.pop()
      top = stack[stack.length - 1]
    }
    stack.push(i)
  }
  return res
};