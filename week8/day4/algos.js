// Interview Algo given to alumni

/*
  You are given a list of integers. Find all the consecutive sets of
  integers that adds up to the sum passed in as one of the inputs.
*/

// const nums1 = [2, 5, 3, 6, 7, 23, 12]
// const sum1 = 16
// const expected1 = [
//   [2, 5, 3, 6],
//   [3, 6, 7],
// ]

// // Bonus:
// const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12]
// const sum2 = 16
// const expected2 = [
//   [2, 5, 3, 6],
//   [3, 6, 7],
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

function findConsqSums(nums, targetSum) {}

/*****************************************************************************/

/*
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

  The first element is never considered non-consecutive.

  Return an array of objects where each object contains the number itself
  and it's index.
*/

// const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
// const expected1 = [
//   { i: 4, n: 6 },
//   { i: 7, n: 10 },
// ];

function allNonConsecutive(sortedNums) {}
