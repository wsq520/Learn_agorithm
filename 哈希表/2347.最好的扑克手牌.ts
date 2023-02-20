// https://leetcode.cn/problems/best-poker-hand/description/

function bestHand(ranks: number[], suits: string[]): string {
  const set = new Set()

  for (const suit of suits) {
    set.add(suit)
  }

  // 5张花色相同的
  if (set.size === 1) return "Flush"

  const map = new Map()

  for (const rank of ranks) {
    if (!map.has(rank)) {
      map.set(rank, 1)
    } else {
      map.set(rank, map.get(rank) + 1)
    }
  }

  if (map.size === 5) return "High Card"

  for (const [k, v] of map) {
    if (v >= 3) return "Three of a Kind"
  }

  return "Pair"
};

export { }