Array.prototype.sequentialSearch = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (item === this[i]) {
      return i
    }
  }
  return -1
}