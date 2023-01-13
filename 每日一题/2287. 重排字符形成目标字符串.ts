// https://leetcode.cn/problems/rearrange-characters-to-make-target-string/description/?languageTags=javascript

function rearrangeCharacters(s: string, target: string): number {
  // 初始化为无穷大
  let count: number = Infinity

  for (const c of target) {
    // 以字符 c 为标记进行切割 形成数组 那么该字符串含有字符 c 的个数就是数组长度减一 
    let sNum = s.split(c).length - 1
    let tNum = target.split(c).length - 1
    // 当字符串在 s 中不存在 那么sNum = 0 所以说明组成不了副本
    count = Math.min(count, Math.floor(sNum / tNum))
  }

  return count
};

export { }