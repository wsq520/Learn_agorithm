var CQueue = function() {
  this.inStack = []
  this.outStack = []
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function(value) {
  this.inStack.push(value)
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function() {
  if(this.outStack.length > 0) {
      return this.outStack.pop()
  } else {
      while(this.inStack.length > 0) {
          this.outStack.push(this.inStack.pop())
      }
      return this.outStack.pop() || -1
  }
};
