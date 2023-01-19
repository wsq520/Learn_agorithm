// https://leetcode.cn/problems/strong-password-checker-ii/

function strongPasswordCheckerII(password: string): boolean {
  if (password.length < 8) return false
  const str1 = '0123456789'
  const str2 = 'abcdefghijklmnopqrstuvwxyz'
  const str3 = str2.toUpperCase()
  const str4 = '!@#$%^&*()-+'
  const map = {
    'number': 0,
    'small': 0,
    'big': 0,
    'special': 0
  }
  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i + 1]) {
      return false
    } else if (str1.includes(password[i])) {
      map.number = map.number + 1
    } else if (str2.includes(password[i])) {
      map.small = map.small + 1
    } else if (str3.includes(password[i])) {
      map.big = map.big + 1
    } else if (str4.includes(password[i])) {
      map.special = map.special + 1
    }
  }
  for (const key of Object.keys(map)) {
    if (map[key] === 0) return false
  }
  return true
};

export { }