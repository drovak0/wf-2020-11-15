/*
  Array: Binary Search (non recursive)

  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted.
*/

const nums1 = [1, 3, 5, 6]
const searchNum1 = 4
const expected1 = false

const nums2 = [4, 5, 6, 8, 12]
const searchNum2 = 5
const expected2 = true

const nums3 = [3, 4, 6, 8, 12]
const searchNum3 = 3
const expected3 = true

const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9]
const searchNum4 = 2
const expected4 = true

function binarySearch(sortedNums, searchNum) {
  // define start and end index
  var start = 0
  var end = sortedNums.length - 1

  //while start index is less than or equal to end index
  while (start <= end) {
    //define mid index
    var mid = Math.floor((start + end) / 2)
    //compare mid index with the searchNum for match
    if (sortedNums[mid] === searchNum) {
      return true
    }
    //search left side of of array
    else if (searchNum < sortedNums[mid]) {
      end = mid - 1
    }
    //search right side of array
    else {
      start = mid + 1
    }
  }
  return false
}

console.log(binarySearch(nums1, searchNum1))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, searchNum3))
console.log(binarySearch(nums4, searchNum4))