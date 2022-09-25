var reverseString2 = function(s) {
  const len = s.length
  let temp = ''
  for(let i = 0; i < len/2; i++) {
      temp = s[i]
      s[i] = s[len - i - 1]
      s[len - i - 1] = temp
  }
  return s
};


var reverseString = function(s) {
  //Do not return anything, modify s in-place instead.
  reverse(s)
};

var reverse = function(s) {
  let l = -1, r = s.length;
  while(++l < --r) [s[l], s[r]] = [s[r], s[l]];
};

var reverseString3 = function(s) {
  let i = 0, j = s.length - 1
  while(i <=j) {
    // 利用数组的解构交换两个数的值
      [s[i++], s[j--]] = [s[j], s[i]]
  }
  return s
};