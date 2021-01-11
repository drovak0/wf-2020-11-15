/*
  Union Sorted Arrays

  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.

  Unions by default will take the set of dupes
  that has the highest occurrences from one array.

  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA = [1, 2, 2, 2, 7]
const numsB = [2, 2, 6, 6, 7, 8, 9, 10]
const expected = [1, 2, 2, 2, 6, 6, 7, 8, 9, 10]
/*
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

function orderedMultisetUnion(sortedA, sortedB) {
  let idxA = 0,
    idxB = 0
  const ret = [],
    len1 = sortedA.length,
    len2 = sortedB.length
  console.log(ret)
  while (idxA < len1 && idxB < len2) {
    const n1 = sortedA[idxA],
      n2 = sortedB[idxB]

    if (n1 === n2) {
      ret.push(n1)
      idxA++
      idxB++
    } else if (n1 < n2) {
      ret.push(n1)
      idxA++
    } else {
      ret.push(n2)
      idxB++
    }
    console.log(ret)
  }
  // arrays might be different lengths, if any elems are remaining, concat them
  console.log(`idxA: `, idxA);
  console.log(`idxB: `, idxB);
  console.log(`sortedA.slice(idxA): `, sortedA.slice(idxA));
  console.log(`sortedB.slice(idxB): `, sortedB.slice(idxB));


  return ret
          .concat(sortedA.slice(idxA))
          .concat(sortedB.slice(idxB))
}

console.log(orderedMultisetUnion(numsA, numsB))

/*****************************************************************************/

/*
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

// const squareMatrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9],
// ];
// const expected = 2;
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
