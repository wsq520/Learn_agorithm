/*
输入整数数组 arr ，找出其中最小的 k 个数。
例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
*/


// sort里面的回调函数可以决定升序或者降序排序
// sort是对原数组进行排序 不是返回一个新数组
var getLeastNumbers = function(arr, k) {
  if(k === 0 ) return []
  arr.sort((a, b) =>  a - b)
  let res = []
  let i = 0
  while(i < k) {
      res.push(arr[i])
      i++
  }
  return res
};

