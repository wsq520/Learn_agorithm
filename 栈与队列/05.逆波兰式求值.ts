// https://leetcode.cn/problems/evaluate-reverse-polish-notation/submissions/

function evalRPN(tokens: string[]): number {
  const stack: number[] = []
  const charMap: Map<string, (a: number, b: number) => number> = new Map([
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['/', (a, b) => Math.trunc(a / b)],
    ['*', (a, b) => a * b]
  ])
  let a: number, b: number
  for (let item of tokens) {
    // 遇到操作符 就把栈中后两个元素取出进行运算 再把运算结果放入栈里
    if (charMap.has(item)) {
      b = stack.pop()!
      a = stack.pop()!
      stack.push(charMap.get(item)!(a, b))
    } else {
      stack.push(Number(item))
    }
  }
  return stack.pop()!
};