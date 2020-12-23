/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.

  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5
const expected1 = 5

const num2 = 10
const expected2 = 1

const num3 = 25
const expected3 = 7

const num4 = 25761
// 21
// 3
const expected4 = 3

function sumToOneDigit(num) {}

/*****************************************************************************/

/*
  String Anagrams

  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).

  Ok to use built in methods
*/

const str11 = "lim";
const expected11 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

function generateAnagrams(str, solutions = [], partial = "") {
  console.log('################ Function Call ####################')
  console.log(`str: `, str)
  console.log(`solutions: `, solutions)
  console.log(`partial: `, partial)
  if (!str) {
    solutions.push(partial)
  }

  // '123' 3*2*1 !3 = 6
  // Factorial
  for (let i = 0; i < str.length; i++) {
    console.log('*************** Foor Loop Interation *********************')
    console.log(`i: `, i);

    // ''
    const leftSlice = str.slice(0, i)
    const rightSlice = str.slice(i + 1) // skips current letter
    console.log(`leftSlice: `, leftSlice);
    console.log(`rightSlice: `, rightSlice);
    generateAnagrams(leftSlice + rightSlice, solutions, partial + str[i])
  }
  return solutions
}

generateAnagrams(str11)

function anagrams(str, memo="", arr=[]) {
  if (str.length == 0) {
    arr.push(memo)
    return arr
  }
  for (var i = 0; i < str.length; i++) {
    anagrams(str.slice(0, i) + str.slice(i + 1, str.length), memo + str[i], arr)
  }
  return arr
}
console.log(anagrams("cat"))