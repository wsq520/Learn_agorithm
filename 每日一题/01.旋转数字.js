var rotatedDigits = function(n) {
  let res = 0
  for(let i = 1; i <= n; i++) {
      const str = i + ''
      // 3 4 7 旋转后根本不是合法数字 直接排除
      if(str.includes('3') || str.includes('4') || str.includes('7')) {
          continue
      }
      // 即使其余数字都相同 但是只要包含了2 5 6 9其中一个 旋转之后可以确保数值与原来不同
      if(str.includes('2') || str.includes('5') || str.includes('6') || str.includes('9')) {
          res++
      }
  }
  return res
};