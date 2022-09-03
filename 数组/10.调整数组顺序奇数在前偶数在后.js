//输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
//使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。

// 方法一：使用两个map 一个保存奇数 一个是偶数 
var exchange1 = function(nums) {
  if(!nums.length) return []
 const jimap = new Map()
 const oumap = new Map()
 for(let i =0; i < nums.length; i++) {
     if(nums[i] %2 !== 0) {
         if(jimap.has(nums[i])) {
             let value = jimap.get(nums[i])
             jimap.set(nums[i], value + 1)
         }else {
             jimap.set(nums[i], 1)
         }
     } else {
          if(oumap.has(nums[i])) {
             let value = oumap.get(nums[i])
             oumap.set(nums[i], value + 1)
         }else {
             oumap.set(nums[i], 1)
         }
     }
 }
 let res = []
 for(const [key, value] of jimap) {
     if(value === 1) {
         res.push(key)
     } else {
         for(let i = 0; i < value; i++) {
             res.push(key)
         }
     }
 }
  for(const [key, value] of oumap) {
     if(value === 1) {
         res.push(key)
     } else {
         for(let i = 0; i < value; i++) {
             res.push(key)
         }
     }
 }
 return res
};

// 方法二：
var exchange2 = function(nums) {
  if(!nums.length) return []
  let left = 0, right = nums.length - 1
  while(left < right) {
      //左边是偶数 右边奇数 则交换
      if(nums[left] % 2 === 0 && nums[right] !== 0) {
         let temp = nums[left]
              nums[left] = nums[right]
              nums[right] = temp
      }
      //左边奇数 右边奇/偶数
      // 1.右边为奇数 左指针 + 1 找偶数
      // 2.右边为偶数 这正是所有的顺序 所以还是左指针 + 1 
      if(nums[left] % 2 !== 0) { 
          left++
      }
      //左边偶数 右边奇/偶数
      if(nums[right] % 2 === 0) {
          right--
      }
  }
  return nums
};