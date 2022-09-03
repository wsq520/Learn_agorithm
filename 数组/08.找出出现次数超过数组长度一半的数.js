// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 示例:
// 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
// 输出: 2


// 当数组长度为奇数时 长度的一般应该是长度除以2向下取整
var majorityElement = function(nums) {
  const halfLen = Math.floor(nums.length/2)
  const map = new Map()
  for(let i = 0; i < nums.length; i++) {
      if(map.has(nums[i])) {
          const value = map.get(nums[i])
          map.set(nums[i], value + 1)
      }else {
          map.set(nums[i], 1)
      }
  }
  // item[0]是key item[1]是value
  for(const item of map) {
      if(item[1] > halfLen) {
          return item[0]
      }
  }
  // 遍历方式二：
  // for(const [key, value] of map) {
  //   if(value > halfLen) {
  //       return key
  //   }
}
