// https://leetcode.cn/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/description/?languageTags=javascript
// @ts-nocheck
// 题目给的打卡时间都是同一天的 但是打卡时间顺序不是顺延的、是打乱顺序
function alertNames(keyName: string[], keyTime: string[]): string[] {
  const timeMap = new Map()
  const n = keyName.length;
  for (let i = 0; i < n; i++) {
    const name = keyName[i]
    const time = keyTime[i]
    if (!timeMap.has(name)) {
      timeMap.set(name, [])
    }
    let [hour, minute] = time.split(':')

    if (hour[0] === '0') hour = hour[1]
    if (minute[0] === '0') minute = minute[1]
    timeMap.get(name).push(Number(hour) * 60 + Number(minute))
  }
  let res = []
  const keySet = timeMap.keys()
  for (const name of keySet) {
    const list = timeMap.get(name)
    // 升序排序
    list.sort((a, b) => a - b)
    const size = list.length
    for (let i = 2; i < size; i++) {
      // 要找出一小时打卡三次 那么就拿最近三次的前后两次比较就好 因为数组已经是升序
      // 如果索引2 - 索引0 都不足60分钟 那么 1 - 0 也不可能超过60分钟 因为可以找到一小时打开三次的摸鱼员工
      const time1 = list[i - 2], time2 = list[i]
      const difference = time2 - time1
      if (difference <= 60) {
        res.push(name)
        break
      }
    }
  }
  res.sort()
  return res
};

export { }