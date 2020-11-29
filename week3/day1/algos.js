/*
  String: Reverse

  Given a string,
  return a new string that is the given string reversed
*/

// const str1 = "creature"
// const expected1 = "erutaerc"

// const str2 = "dog"
// const expected2 = "god"

function reverseString(str) {
  // some kind of set up
  var s = ""
  // some repetative work
  for (var i = str.length - 1; i >= 0; i--) {
    s += str[i]
  }
  // some clean up
  return s
}
// console.log(reverseString(str2))


/*****************************************************************************/

/*
  Acronyms

  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).

  Do it with .split first if you need to, then try to do it without
*/

// const str1 = " there's no free lunch - gotta pay yer way. ";
// const expected1 = "TNFL-GPYW";

// const str2 = "Live from New York, it's Saturday Night!";
// const expected2 = "LFNYISN";

function acronymize(str) {
  // set up
  // split the str into an array
  var strArray = str.split(' ')
  console.log(`strArray: `, strArray);
  var newStr = ''
  // set up a new string
  // some work
  for(var i = 0; i < strArray.length; i++) {
    // if the character is a ' ' the next letter is the one we are looking for
    // check the word
    var word = strArray[i]
    if (word.length != '') {
      console.log(`word: `, word);
      newStr += word[0].toUpperCase()
      // newStr = newStr + word[0].toUpperCase()
      // capatilize the first letter -> new string
    }
  }
  console.log(`newStr: `, newStr);

  return newStr
  // some clean up
  // return the new string
}

// acronymize(str1)

// function acronymize2(str) {
//   var newstr = ""
//   if (str[0] != " ") {
//     newstr += str[0]
//   }
//   for (var i = 0; i < str.length - 1; i++) {
//     if (str[i] == " ") {
//       newstr = newstr + str[i + 1].toUpperCase()
//     }
//   }
//   console.log(newstr)
//   return newstr
// }

/*****************************************************************************/

/* case insensitive string compare */

const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;

function caseInsensitiveStringCompare(strA, strB) {
  if ((strA.length !== strB.length)) {
    return false
  }
  // convert 2 strings to either upper or lower
  // compare the str
  return strA.toUpperCase() === strB.toUpperCase()

  // alternate approach
  // compare each character 1 by 1
  // for (var i = 0; i < strA.length; i++) {
  //   if (strA[i] !== strB[i]) {
  //     return false
  //   }
  // }
  // return true
}

console.log(caseInsensitiveStringCompare(strA1, strB1))