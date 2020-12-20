// Recursion

// Base case(s)
// Forward movement

// return value or function call
// Call Stack
// Pass by value/reference

/* ******************************************************************************** */

/*
  Recursively sum an arr of ints
*/

// const nums1 = [1, 2, 3]
// const expected1 = 6

// add params if needed for recursion

function sumArr(nums, i = 0) {
  if (i === nums.length) {
    return 0
  }
  return nums[i] + sumArr(nums, i + 1)
}

function sumArr2(nums, sum = 0, i = 0) {
  if (i === nums.length) {
    return sum
  }
  return sumArr2(nums, sum + nums[i], i + 1)
}

/* ******************************************************************************** */

/*
  Recursive Sigma

  Input: integer
  Output: sum of integers from 1 to Input integer

*/

// const num1 = 5
// const expected1 = 15
// // Explanation: (1+2+3+4+5)

// const num2 = 2.5
// const expected2 = 3
// // Explanation: (1+2)

// const num3 = -1
// const expected3 = 0

function recursiveSigma(n) {
  // get rid of decimals
  const int = parseInt(n);

  // Termination Condition if it's bad data (not a number)
  if (isNaN(int)) {
    return null;
  }

  // base case
  if (int < 1) {
    return 0;
  }
  // if the return keyword is missing below, undefined will be returned because
  // the above return happens in a nested recursive call and doesn't make it all the way out
  return int + recursiveSigma(int - 1);
}
/*
  recursiveSig(5) breakdown
  below function calls are added to top of call stack, .push (can be seen in debugger):

  5 + recursiveSig(4)
      4 + recursiveSig(3)
          3 + recursiveSig(2)
              2 + recursiveSig(1)
                  1 + recursiveSig(0)
                      0 is returned - base case reached, can start summing now
                      - call stack "unwinds" now with .pop LIFO (matching indentation)
                  1 + 0 = 1 <- this sum becomes the right side of the next addition
              2 + 1 = 3
          3 + 3 = 6
      4 + 6 = 10
  5 + 10 = 15
*/
