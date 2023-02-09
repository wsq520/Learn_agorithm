// https://leetcode.cn/problems/design-authentication-manager/description/

class AuthenticationManager {
  public timeToLive: number
  public map: Map<any, any>

  constructor(timeToLive: number) {
    this.timeToLive = timeToLive
    this.map = new Map()
  }

  generate(tokenId: string, currentTime: number): void {
    this.map.set(tokenId, currentTime + this.timeToLive)
  }

  renew(tokenId: string, currentTime: number): void {
    if ((this.map.get(tokenId) || 0) > currentTime) {
      this.map.set(tokenId, currentTime + this.timeToLive)
    }
  }

  countUnexpiredTokens(currentTime: number): number {
    let res = 0
    for (const time of this.map.values()) {
      if (time > currentTime) res++
    }

    return res
  }
}

export { }