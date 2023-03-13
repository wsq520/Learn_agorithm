// https://leetcode.cn/problems/minimum-hours-of-training-to-win-a-competition/description/

// 严格大于 也就是至少比某个数大于 1
function minNumberOfHours(initialEnergy: number, initialExperience: number, energy: number[], experience: number[]): number {
  let sum = 0

  for (const item of energy) {
    sum += item
  }
  // 如果初始体力值大于打败所有对手的所需的体力 那么就不需要训练
  // 反之 则需要训练至体力值为打败所有对手需要体力值 + 1 的体力
  let trainHours = initialEnergy > sum ? 0 : sum + 1 - initialEnergy

  for (const e of experience) {
    // 此时需要增加训练
    if (initialExperience <= e) {
      // +1 是因为确保经验值严格大于打败对手所需经验值
      trainHours += 1 + (e - initialExperience)
      // 打败对手 自身经验值 +e 
      // 而此时是自身经验不足以打败对手 所以需要训练
      // 所需要达到的经验值就是 e + 1 所以击败本轮对手之后 自身的经验值就是 e + 1 + e
      initialExperience = e + 1 + e
    } else {
      initialExperience += e
    }
  }

  return trainHours
}

export { }