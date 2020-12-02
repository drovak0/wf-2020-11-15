/*
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome.
    - palindrome = string that is same forwards and backwards

  Do not ignore spaces, punctuation and capitalization
 */

// const str1 = "a x a"
// const expected1 = true

// const str2 = "racecar"
// const expected2 = true

// const str3 = "Dud"
// const expected3 = false

// const str4 = "oho!"
// const expected4 = false

function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    // Looping inwards from both sides.
    let leftChar = str[i]
    let rightChar = str[str.length - 1 - i]

    if (leftChar !== rightChar) {
      return false // early exit
    }
  }
  return true
}


/*****************************************************************************/

/*
Longest Palindrome

For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring.

Strings longer or shorter than complete words are OK.

All the substrings of "abc" are:
a, ab, abc, b, bc, c
*/

// const str1 = "what up, daddy-o?";
// const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";

function longestPalindromicSubstring(str) {
  if (str.length === 0) return ''
  // longestPal
  var longestPal = str[0]
  // loop to read the entire string
  for (let i = 0; i < str.length; i++) {
    // loop
    for (let j = i + 1; j < str.length; j++) {
      // create another string
      // slice
      var sub = str.slice(i,j)

      // take a portion of the string
      // check if isPalinDrome
      if (isPalindrome(sub)) {
        // if the portion.length is longer then longestPal.length
        if (sub.length > longestPal.length) {
          longestPal = sub
        }
      }
    }
  }

  // return longestPal
  console.log(longestPal)
  return longestPal
}

longestPalindromicSubstring(str2)
/*****************************************************************************/