// 思路：属于符号左边的字符全部进栈 遇到右边字符就出栈 和栈顶元素匹配 匹配不成功就返回false
// 当所有符号都匹配成功了 那么最后的栈为空

var isValid = function(s) {
  if(!s.length) return false
  const stack = []
  stack.push(s[0])
  for(let i = 1; i < s.length; i++) {
      let str = s[i]
      if(str === '{' || str === '(' || str === '[') {
          stack.push(str)
      } else {
          if(str === '}' && stack[stack.length - 1] !== '{') {
              return false
          } else if(str === ')' && stack[stack.length - 1] !== '(') {
              return false
          } else if(str === ']' && stack[stack.length - 1] !== '[') {
              return false
          } else {
              stack.pop()
          }
      }
  }
  return stack.length === 0
};