/*
  Given an array and an index,
  remove the item at that index.
  return the removed item

  No built-in array methods except pop().
*/

// const arr2 = ["a", "b", "c"]
// const removeIdx2 = 3
// const expected2 = null
// const arr2Expected = ["a", "b", "c"]

// const arr3 = ["a", "b", "c"]
// const removeIdx3 = -3
// const expected3 = null
// const arr3Expected = ["a", "b", "c"]

function removeAt(arr, idx) {
  // check if we have a valid index (fail fast)
  if (idx < 0 || idx >= arr.length) {
    return null
  }
  // save the element
  var element = arr[idx]
  // loop
  for (var i = idx; i < arr.length - 1; i++) {
    // shift array
    console.log(`i: `, i)

    arr[i] = arr[i + 1]
  }
  console.log("arr: ", arr)
  // pop the last element
  arr.pop()
  // return the saved elememnt
  return element
}

// const arr1 = ["a", "b", "c"]
// const removeIdx1 = 1

// var returnedValue = removeAt(arr1, removeIdx1)

// const expected1 = "b"
// console.log(returnedValue === expected1) // true

// console.log(arr1)
// const arr1Expected = ["a", "c"]

/* ******************************************************************************** */

/*
  Given an array, move the minimum value to the front
  return the array after done

  No built in methods
*/

// const nums1 = [1, 5, 2, 9];
// const expected1 = [1, 5, 2, 9];

function minToFront(nums) {
  // check if the length of nums > 0
  if (nums.length === 0) {
    return []
  }

  var min = nums[0]
  var minIdx = 0
  // loop
  for (var i = 1; i < nums.length; i++) {
    // find the min
    if (nums[i] < min) {
      min = nums[i]
      minIdx = i
    }
  }
  console.log(`min: `, min)
  console.log(`minIdx: `, minIdx)

  // if not shift it to the front
  for (var i = minIdx; i > 0; i--) {
    nums[i] = nums[i - 1]
  }

  nums[0] = min

  console.log(`nums: `, nums)
  return nums
}

const nums2 = [5, 1, 0, 2, 3, 0]
const expected2 = [0, 5, 1, 2, 3, 0]

minToFront(nums2)
