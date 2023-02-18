// https://leetcode.cn/problems/find-positive-integer-solution-for-a-given-equation/

/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * class CustomFunction {
 *      f(x: number, y: number): number {}
 * }
 */

// @ts-nocheck
function findSolution(customfunction: CustomFunction, z: number): number[][] {
  const res: number[][] = []

  for (let x = 1, y = 1000; x <= 1000 && y >= 1; x++) {
    while (y >= 1 && customfunction.f(x, y) > z) {
      y--
    }
    if (y >= 1 && customfunction.f(x, y) === z) {
      res.push([x, y])
    }
  }

  return res
};