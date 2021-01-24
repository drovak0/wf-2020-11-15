/*
  Given an array of objects that contain a category key,
  return a hash table to group the objects by their category.

  Make the grouping case-insensitive.

  Bonus: allow the key that is grouped by to be provided.
*/

// const objects = [
//   {
//     name: "Baby Yoda",
//     category: "cute",
//   },
//   {
//     name: "Cricket Protein",
//     category: "food",
//   },
//   {
//     name: "Shibe",
//     category: "Cute",
//   },
//   {
//     name: "Ancient India",
//     category: "Cradle of Civilization",
//   },
//   {
//     name: "Wasp Crackers",
//     category: "Food",
//   },
//   {
//     name: "The Fertile Crescent",
//     category: "Cradle of Civilization",
//   },
// ]

// const expected = {
//   cute: [
//     {
//       name: "Baby Yoda",
//       category: "cute",
//     },
//     {
//       name: "Shibe",
//       category: "Cute",
//     },
//   ],
//   food: [
//     {
//       name: "Cricket Protein",
//       category: "food",
//     },
//     {
//       name: "Wasp Crackers",
//       category: "Food",
//     },
//   ],
//   "cradle of civilization": [
//     {
//       name: "Ancient India",
//       category: "Cradle of Civilization",
//     },
//     {
//       name: "The Fertile Crescent",
//       category: "Cradle of Civilization",
//     },
//   ],
// }

function categoryTableBuilder(items) {}

/*****************************************************************************/

/*
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time
*/

// const S1 = "ab#c";
// const T1 = "ad#c";
// const expected1 = true;
// // Explanation: Both S and T become "ac"

// const S2 = "ab##";
// const T2 = "c#d#";
// const expected2 = true;
// // Explanation: Both S and T become ""

// const S3 = "a##c";
// const T3 = "#a#c";
// const expected3 = true;
// // Explanation: Both S and T become "c"

// const S4 = "a#c";
// const T4 = "b";
// const expected4 = false;
// // Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(S, T) {}
