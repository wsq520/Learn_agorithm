// https://leetcode.cn/problems/count-items-matching-a-rule/solution/

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  let res:number = 0
  // 根据ruleKey拿到该关键字在物品中的索引
  const indexForKey:number | undefined = {"type":0, "color": 1, "name": 2}[ruleKey]
  items.map(item => {
      if(indexForKey && item[indexForKey] === ruleValue) {
          res++
      }
  })
  return res
};