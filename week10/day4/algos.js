/*

  Given two strings,
  return true if the first string can be built from the letters in the 2nd string
  Ignore case

  .indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World"
const strB1 = "lloeh wordl"
const expected1 = true

const strA2 = "Hey"
const strB2 = "hello"
const expected2 = false
// Explanation: second string is missing a "y"

const strA3 = "hello"
const strB3 = "helo"
const expected3 = false
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello"
const strB4 = "lllheo"
const expected4 = true

const strA5 = "hello"
const strB5 = "heloxyz"
const expected5 = false
// Explanation: not strB5 does not have enough "l" chars.

function canBuildS1FromS2(s1, s2) {}

/*****************************************************************************/

/*
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3.
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

function lengthOfLongestSubString(str) {}
