/*
  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears.


  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

// const str1 = "aaaabbcddd"
// const expected1 = "a4b2c1d3"

// const str2 = ""
// const expected2 = ""

// const str3 = "a"
// const expected3 = "a"

// const str4 = "bbcc"
// const expected4 = "bbcc"

function encodeStr(str) {
  // pseudo code

  // if string length == 0
  if (str.length == 0) {
    // exit
    return ''
  }

  // counter
  var counter = 1
  // newStr
  var newStr = ''

  // loop
  for(var i = 0; i < str.length; i++){
    // if current letter == next letter
    var currentLetter = str[i]
    var nextLetter = str[i+1]
    if (currentLetter == nextLetter) {
      // increment counter
      counter++
      // counter = counter + 1
      // counter += 1
    } else {
      // else
      // concatenate current letter + counter
      newStr += currentLetter + counter
      // reset the counter
      counter = 1
    }
  }

  console.log(newStr)
  // if newStr is not shorter than orginal string
  if (newStr.length >= str.length) {
    // return original string
    return str
  } else {
    // otherwise return newStr
    return newStr
  }

  // return newStr.length >= str.length ? str : newStr

  // if (newStr.length >= str.length) {
  //   // return original string
  //   return str
  // }
  // // otherwise return newStr
  // return newStr
}

// console.log(encodeStr(str1) == expected1)


/*****************************************************************************/

/*
  String Decode
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {
  // new string
  var newStr = ''
  // loop through str
  for(var i = 0; i < str.length; i++) {
    // if condition we see a number

    var tryToConvertToInt = parseInt(str[i])
    if (tryToConvertToInt) {
      console.log('We found a number!')
      // add characters i - 1 that many times
      var numTimes = str[i]
      console.log(numTimes)
      // reduce loop by 1 since we added first letter in else
      for (var j = 0; j < numTimes - 1; j++) {
        newStr += str[i-1]
        console.log(newStr)
      }
    } else {
      console.log('We did not find a number!')
      // we could add the letter
      // but we are adding it when we see a number
      newStr += str[i]
    }
  }

  console.log(newStr)
  // if (newStr.length == 0) {
  //   return str
  // }
  return newStr
}

// console.log(decodeStr(str1) == expected1)
decodeStr('qwertyuiop')