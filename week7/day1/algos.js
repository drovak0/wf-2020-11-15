/*
  Stable sort

  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.

  Space: O(1) constant.

  For review, create a function that uses BubbleSort to sort an unsorted array in-place.

  For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function bubbleSort(nums) {
  let isSorted = false

  while (isSorted === false) {
    isSorted = true

    for (let i = 0; i < nums.length - 1; i++) {
      const j = i + 1

      if (nums[i] > nums[j]) {
        isSorted = false
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
      }
    }
  }
  return unorderedNums
}

/*****************************************************************************/

/*
Selection sort works by iterating through the list, finding the minimum
value, and moving it to the beginning of the list. Then, ignoring the first
position, which is now sorted, iterate through the list again to find the
next minimum value and move it to index 1. This continues until all values
are sorted.

Unstable sort.

Time Complexity
- Best: O(n^2) quadratic.
- Average: O(n^2) quadratic.
- Worst: O(n^2) quadratic.

Space: O(1) constant.

Selection sort is one of the slower sorts.
- ideal for: pagination, where page 1 displays 10 records for example,
you run selection sort for 10 iterations only to display the first 10
sorted items.
*/

// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function selectionSort(nums) {
  for (var i = 0; i < nums.length; i++) {
    var min = i
    for (var j = i; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j
      }
    }
    if (nums[i] > nums[min]) {
      var temp = nums[i]
      nums[i] = nums[min]
      nums[min] = temp
    }
  }
  return nums
}
console.log(selectionSort(numsRandomOrder1))
console.log(selectionSort(numsReversed))


// function selectionSort(nums) {
  //   const len = nums.length
  //   let selectedIdx = 0
  //   let idxOfCurrMin = 0

  //   while (selectedIdx < len) {
    //     for (let i = selectedIdx; i < len; i++) {
      //       if (nums[i] < nums[idxOfCurrMin]) {
        //         idxOfCurrMin = i
        //       }
        //     }

        //     if (nums[selectedIdx] !== nums[idxOfCurrMin]) {
          //       const temp = nums[selectedIdx]
          //       nums[selectedIdx] = nums[idxOfCurrMin]
          //       nums[idxOfCurrMin] = temp
          //     }
          //     selectedIdx += 1
          //     // reset idxOfCurrMin to the next selected index we are going to work with to find the next min
          //     idxOfCurrMin = selectedIdx
          //   }
          //   return nums
          // }

/*****************************************************************************/

// Resources

// https://visualgo.net/en/sorting
// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
// https://www.bigocheatsheet.com/