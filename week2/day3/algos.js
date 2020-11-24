/*
  Given an array, reverse it's items in place
  return the array after reversing it

  Do it in place without using any built in methods
*/

// const arr1 = [1, 2, 3]
// const expected1 = [3, 2, 1]

// const arr2 = ["a", "b"]
// const expected2 = ["b", "a"]

// const arr3 = ["a"]
// const expected3 = ["a"]

// const arr4 = []
// const expected4 = []

function reverseArr(arr) {
  // code here
  // pseudo
  // loop
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    console.log("arr[i]: ", arr[i])
    console.log("arr[arr.length - 1 - i]: ", arr[arr.length - 1 - i])
    // swap elements
    // assign the first item to temp
    var temp = arr[i]
    // assign first item to last item in array
    arr[i] = arr[arr.length - 1 - i]
    // assign the last to temp
    arr[arr.length - 1 - i] = temp
  }
  console.log(arr)
  return arr
}

// reverseArr([1, 2, 3, 4, 5])
/* ******************************************************************************** */

/*
  Recreate the built in .slice method

  Given an array, a start index, and an end index,
  return a NEW array that has only the elements from
  the start index (inclusive) to the end index (exclusive)

  What should you do if the provided end index is out of bounds?
*/

// const arr1 = ["a", "b", "c", "d", "e"];
// const startIdx1 = 0;
// const endIdx1 = 5;
// const expected1 = ["a", "b", "c", "d", "e"];

// const arr2 = ["a", "b", "c", "d", "e"];
// const startIdx2 = 0;
// const endIdx2 = 1;
// const expected2 = ["a"];

// const arr3 = ["a", "b", "c", "d", "e"];
// const startIdx3 = 1;
// const endIdx3 = 2;
// const expected3 = ["b"];

const arr4 = ["a", "b", "c", "d", "e"]
const startIdx4 = -100
const endIdx4 = 100
const expected4 = ["a", "b", "c", "d", "e"]

// const arr5 = ["a", "b", "c", "d", "e"];
// const startIdx5 = 0;
// const endIdx5 = 0;
// const expected5 = [];

// const arr6 = ["a", "b", "c", "d", "e"];
// const startIdx6 = 1;
// const endIdx6 = 1;
// const expected6 = [];

function slice(arr, startIdx, endIdx) {
  // code here
  var newArr = []
  // some condition to handle -100
  if (startIdx < 0) {
    startIdx = 0
  }
  if (endIdx > arr.length) {
    endIdx = arr.length
  }
  for (var i = startIdx; i < endIdx; i++) {
    newArr.push(arr[i])
  }
  console.log(newArr)
  return newArr
}

slice(arr4, -100, 100)
