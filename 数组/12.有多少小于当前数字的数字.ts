// https://leetcode.cn/problems/how-many-numbers-are-smaller-than-the-current-number/description/

function smallerNumbersThanCurrent(nums: number[]): number[] {
  let arr:number[] = [...nums]
  // 升序排序 那么此时元素的索引就是数组中小于该元素的元素个数
  arr.sort((a, b) => a - b)
  let res:number[] = []
  nums.forEach(num => {
      res.push(arr.indexOf(num))
  })
  return res
};