/*
  Recreate the .push method without using .push

  Given an array and a new item, add the new item to the back of the array
  return the new length of the array

  What index are you adding a new item at?
*/
//            0     1     2     3
// const arr1 = ["a", "b", "c"]
// const newItem1 = "d"
// const expected1 = 4
// const expectedArr1 = ["a", "b", "c", "d"]

// const arr2 = []
// const newItem2 = "a"
// const expected2 = 1
// const expectedArr2 = ["a"]

function push(arr, newItem) {
  // code here
  console.log("arr: ", arr)
  console.log("newItem: ", newItem)
  // assign the newItem to the last index + 1 of the array
  arr[arr.length] = newItem

  // return the new length of the array
  // console.log(arr.length)
  return arr.length
}

// excute the function with arguments
// const newLength = push(arr1, newItem1)
// console.log(newLength)

/* ******************************************************************************** */

/*
  Given an array and an int which represents the position starting from the back,
  return the nth-to-last element
*/

const arr1 = ["a", "b", "c", "d"]
const idx1 = 1
const expected1 = "d"

// const arr2 = ["a", "b", "c", "d"]
// const idx2 = 2
// const expected2 = "c"

// const arr3 = ["a", "b", "c", "d"]
// const idx3 = 0
// const expected3 = null

// const arr4 = ["a", "b", "c", "d"]
// const idx4 = -1
// const expected4 = null

function nthLast(arr, nthToLast) {
  console.log("arr: ", arr)
  console.log("nthToLast: ", nthToLast)
  // code here
  // find the last item subtract number from the last
  return arr[arr.length - nthToLast]
}

console.log(nthLast(arr1, 1))

/* ******************************************************************************** */

// After finishing, finish the basic algos from yesterday that you did not finish.
