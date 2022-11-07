function topKFrequent(nums, k) {
  const map = new Map()
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1)
    } else {
      map.set(nums[i], map.get(nums[i]) + 1)
    }
  }
  let arr = Array.from(map)
  arr.sort((a, b) => {
    return b[1] - a[1]
  })
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0])
  }
  console.log(arr)
  console.log(res)
};

const arr = [1,1,1,2,2,3]
topKFrequent(arr, 2)