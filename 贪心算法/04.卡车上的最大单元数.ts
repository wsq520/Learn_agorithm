// https://leetcode.cn/problems/maximum-units-on-a-truck/description/

function maximumUnits(boxTypes: number[][], truckSize: number): number {
  let res: number = 0
  // 降序
  boxTypes.sort((a, b) => b[1] - a[1])
  for (const boxType of boxTypes) {
    let numberofBox = boxType[0]
    let perofBox = boxType[1]
    if (truckSize >= numberofBox) {
      res += numberofBox * perofBox
      truckSize -= numberofBox
    } else {
      res += truckSize * perofBox
      break
    }
  }
  return res
};

export { }