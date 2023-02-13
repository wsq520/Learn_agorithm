// https://leetcode.cn/problems/replace-the-substring-for-balanced-string/description/?languageTags=javascript

function balancedString(s: string): number {
  const map = { Q: 0, W: 0, E: 0, R: 0 }
  const avg = s.length / 4

  for (const c of s) {
    map[c]++
  }

  if (map.Q === avg && map.W === avg && map.E == avg && map.R === avg) {
    return 0
  }

  let minLength = s.length
  let l = 0, r = 0

  while (r < s.length) {
    map[s[r]]--
    while (l <= r && map.E <= avg && map.Q <= avg && map.R <= avg && map.W <= avg) {
      minLength = Math.min(minLength, r - l + 1)
      map[s[l]]++
      l++
    }
    r++
  }

  return minLength
};

export { }