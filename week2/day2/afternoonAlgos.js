// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

// [0, 1, 1, 2, 3, 5, 8]
// **************************************

// Non-recursive
function nonRFib(num) {
  // store sequence in array
  var fibArr = [0, 1]
  // start stop step
  for (var i = 2; i <= num; i++) {
    // sum and add to array

    // var sum = fibArr[i - 1] + fibArr[i - 2]
    // fibArr[i] = sum
    // fibArr.push(sum)

    fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
    console.log(fibArr)
  }

  console.log(fibArr[num])
  return fibArr[num]
}

// nonRFib(6)

// Recursive

// 1. base case(s)
// 2. forward movement (function that calls its self with a different argument(s))

function rFib(num) {
  console.log(num)
  // base case
  if (num == 0) {
    return 0
  }
  if (num == 1) {
    return 1
  }
  // forward movement
  return rFib(num - 1) + rFib(num - 2)
}

// [0, 1, 1, 2, 3, 5, 8]
console.log(rFib(6))

// https://visualgo.net/bn/recursion
