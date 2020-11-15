var members = ["Murtja", "Sumaih", "Abrar", "Mona"]
// Create a function for each

// 1. Print 1-255
// Print all the integers from 1 to 255.
// print1To255()
function print1To255() {
  for (var i = 1; i <= 255; i++) {
    console.log(i)
  }
}
print1To255()

// 2. Print Odds 1-255
// Print all odd integers from 1 to 255.
// printOdds1To255()
function printOdds1To255() {
  for (var i = 1; i <= 255; i++) {
    if (i % 2 != 0) console.log(i)
  }
}
printOdds1To255()

// 3. Print Ints and Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
// printIntsAndSum0To255()
function printIntsAndSum0To255() {
  var sum = 0
  for (var num = 0; num <= 255; num++) {
    sum += num
    console.log("Number is: ", num, "Sum is: ", sum)
  }
}
printIntsAndSum0To255()

// 4. Iterate and Print Array
// Iterate through a given array, printing each value.
// printArrayVals(arr)
function printIntsAndSum0To255() {
  var sum = 0
  for (var num = 0; num <= 255; num++) {
    sum += num
    console.log("Number is: ", num, "Sum is: ", sum)
  }
}
printIntsAndSum0To255()

// 5. Find and Print Max
// Given an array, find and print its largest element.
// printMaxOfArray(arr)
function printMaxOfArray(arr) {
  var max = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  console.log(max)
}
var arr = [11, 10, 6, 20]
printMaxOfArray(arr)

// 6. Get and Print Average
// Analyze an array’s values and print the average.
// printAverageOfArray(arr)
function printAverageOfArray(arr) {
  var Average = 0
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  Average = sum / arr.length
  console.log(Average)
}
var arr = [11, 10, 6, 20]
printAverageOfArray(arr)

// 7. Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
// returnOddsArray1To255()

// 8. Square the Values
// Square each value in a given array, returning that same array with changed values.
// squareArrayVals(arr)
function squareArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i]
  }
  return arr
}
printArrayVals([1, 2, 3])

// 9. Greater than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
// returnArrayCountGreaterThanY(arr, y)
function returnArrayCountGreaterThanY(arr, y) {
  var count = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count++
    }
  }
}
returnArrayCountGreaterThanY(1, 2, 3)

// 10. Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
// zeroOutArrayNegativeVals(arr)
function zeroOutArrayNegativeVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0
    }
  }
  return arr
}
zeroOutArrayNegativeVals([-2, -8 - 9])

// 11. Max, Min, Average
// Given an array, print the max, min and average values for that array.
// printMaxMinAverageArrayVals(arr)
arr = [4, 1, 2, 3]
function printMaxMinAverageArrayVals(arr) {
  var arrNew = []
  var sum = 0
  arr.forEach(function (element) {
    sum += element
  })
  arrNew.push(Math.max.apply(null, arr))
  arrNew.push(Math.min.apply(null, arr))
  arrNew.push(sum / arr.length)
  return arrNew
}
printMaxMinAverageArrayVals(arr)

// 12. Shift Array Values
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
// shiftArrayValsLeft(arr)

// 13. Swap String For Array Negative Values
// Given an array of numbers, replace any negative values with the string 'Dojo'.
// swapStringForArrayNegativeVals(arr)
arr = [4, -1, 2, -3]
function swapStringForArrayNegativeVals(arr) {
  arr = arr.map(function (element) {
    if (element < 0) {
      return "Dojo"
    } else {
      return element
    }
  })
  return arr
}
swapStringForArrayNegativeVals(arr)
