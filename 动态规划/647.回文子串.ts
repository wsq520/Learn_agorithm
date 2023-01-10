// https://leetcode.cn/problems/palindromic-substrings/description/

function countSubstrings(s: string): number {
  const strLen: number = s.length;
  let num: number = 0;
  let dp: boolean[][] = Array.from(Array(strLen), () => Array(strLen).fill(false));

  for (let j = 0; j < strLen; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j]) {
        if ((j - i) < 2) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
        num += dp[i][j] ? 1 : 0;
      }
    }
  }

  return num;
};

export { }