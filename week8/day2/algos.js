/*
  Union Sorted Arrays

  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.

  Unions by default will take the set of dupes
  that has the highest occurrences from one array.

  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA = [1, 2, 2, 2, 7]
const numsB = [2, 2, 6, 6, 7]
const expected = [1, 2, 2, 2, 6, 6, 7]
/*
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

function orderedMultisetUnion(sortedA, sortedB) {
  const res = []
  let idxA = 0,
    idxB = 0

  while (idxA < sortedA.length || idxB < sortedB.length) {
    if (idxA === sortedA.length) {
      // sortedB is longer, push in all remaining sortedB nums
      res.push(sortedB[idxB++])
      continue
    } else if (idxB === sortedB.length) {
      // sortedA is longer, push in remaining sortedA nums
      res.push(sortedA[idxA++])
      continue
    }

    if (sortedA[idxA] === sortedB[idxB]) {
      res.push(sortedA[idxA++])
      idxB++ // since both were same, increment both
    } else if (sortedA[idxA] < sortedB[idxB]) {
      res.push(sortedA[idxA++])
    } else {
      res.push(sortedB[idxB++])
    }
  }
  return res
}

/*****************************************************************************/

/*
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const expected = 2;
/*
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

function diagonalDifference(sqrMatrix) {
  let ltrSum = 0,
    rtlSum = 0

  for (let i = 0; i < sqrMatrix.length; i++) {
    const row = sqrMatrix[i]
    ltrSum += row[i]
    rtlSum += row[row.length - i - 1]
  }
  return Math.abs(ltrSum - rtlSum)
}