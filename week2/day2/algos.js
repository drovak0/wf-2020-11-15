/*
  Array: Concat

  .push allowed: arrName.push(newItem)

  Replicate JavaScript’s concat() which combines two arrays into one NEW array

  Input: two arrays
  Output: one NEW array with the items of both in the original order
*/

// const arrA1 = ["a", "b"]
// const arrB1 = [1, 2, 3]
// const expected1 = ["a", "b", 1, 2, 3]

// const arrA2 = [1, 2, 3]
// const arrB2 = ["a", "b"]
// const expected2 = [1, 2, 3, "a", "b"]

function concat(arr1, arr2) {
  // set up new array
  var newarr = []

  // read arr1 and push contents into newarr
  for (var i = 0; i < arr1.length; i++) {
    newarr.push(arr1[i])
  }

  // read arr2 and push contents into newarr
  for (var j = 0; j < arr2.length; j++) {
    console.log(`j: `, j)
    newarr.push(arr2[j])
  }

  console.log(newarr)
  return newarr
}

// const arrA1 = ["a", "b"]
// const arrB1 = [1, 2, 3]
// concat(arrA1, arrB1)

/* ******************************************************************************** */

/*
  From zoom interview with student in year 2020

  Given one array,
  return a new array that contains all of the original items duplicated twice
*/

// const arr1 = ["a", "b", "c"];
// const expected1 = ["a", "b", "c", "a", "b", "c"];

// const arr2 = ["a"];
// const expected2 = ["a", "a"];

// const arr3 = [];
// const expected3 = [];

function concatArrWithSelf(arr) {
  // set up newarr
  var newarr = []
  // loop twice
  //    start   ; stop ;step
  for (var i = 0; i < 2; i++) {
    console.log("Outter Loop: *****************")
    console.log(`i: `, i)

    // read values in arr
    // push those values into the new arr
    for (var j = 0; j < arr.length; j++) {
      console.log("Inner Loop: *****************")
      console.log(`arr[j]: `, arr[j])
      newarr.push(arr[j])
      console.log(`newarr: `, newarr)
    }
  }
  console.log(newarr)
  return newarr
}
// const arrA3 = ["a", "b"]
// console.log(concatArrWithSelf(arrA3))

function concatArrWithSelf2(arr) {
  var newarr = []
  for (var j = 0; j < arr.length; j++) {
    newarr.push(arr[j])
  }
  for (var j = 0; j < arr.length; j++) {
    newarr.push(arr[j])
  }
  return newarr
}

const arrA3 = ["a", "b"]
console.log(concatArrWithSelf2(arrA3))
