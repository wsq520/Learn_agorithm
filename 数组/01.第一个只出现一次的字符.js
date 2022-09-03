/* 
在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例 1:

输入：s = "abaccdeff"
输出：'b'
示例 2:

输入：s = "" 
输出：' '
*/

// 将字符作为key 如果出现过了 就将其value值改成特殊值
// 在map中对同一个key进行set操作时 后者会覆盖前者(我以为需要将之前的key删除才能重新set)
var firstUniqChar = function(s) {
  const map = new Map()
  for(let i = 0; i < s.length; i++) {
      if(map.has(s[i])) {
          map.set(s[i], 99)
      } else {
          map.set(s[i], 1)
      }
  }
  for(let i = 0; i < s.length; i++) {
      if(map.get(s[i]) === 1) {
          return s[i]
      }
  }
  return ' '
};

// const map = new Map()
// map.set('name', '111')
// map.set('name', '222')
// console.log(map)