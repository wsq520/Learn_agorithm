// https://leetcode.cn/problems/finding-the-users-active-minutes/description/

function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
  const res: number[] = new Array(k).fill(0)
  const map = new Map<number, Set<number>>()

  // 一个用户id 对应一个set 利用Set元素的唯一性记录唯一操作次数的个数
  for (const [k, v] of logs) {
    map.set(k, (map.get(k) ?? new Set()).add(v))
  }
  // s.size就是操作次数为s.size的某个用户 累计加 1
  for (const s of map.values()) {
    res[s.size - 1]++
  }

  return res
};

export { }