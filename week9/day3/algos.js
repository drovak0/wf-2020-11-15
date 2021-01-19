/*
  Given an array of objects, a searchFor string, and searchBy key that exists in the object
  return a new array of only those objects whose value for the given key starts with the given search string

  You can assume the key will exist on the object and the value of that key will be a string

  Bonus: make the search case insensitive
  Bonus: re-write it with functional programming in mind, using built in methods
  Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
    - you can assume the searchMethod will be valid
*/

// const people = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
//   {
//     firstName: "Eddy",
//     lastName: "Lee",
//   },
//   {
//     firstName: "John",
//     lastName: "Fawn",
//   },
//   {
//     firstName: "Edward",
//     lastName: "Kim",
//   },
// ]

// const searchFor1 = "Jo"
// const searchBy1 = "firstName"
// const expected1 = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   {
//     firstName: "John",
//     lastName: "Fawn",
//   },
// ]

// const searchFor2 = "ohn"
// const searchBy2 = "firstName"
// const expected2 = []
// // Explanation: "John" contains "ohn", it does not start with "ohn"

// const searchFor3 = "Do"
// const searchBy3 = "lastName"
// const expected3 = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
// ]

// // Bonus
// const searchFor4 = "E"
// const searchBy4 = "lastName"
// const searchMethod4 = "includes"
// const expected4 = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
//   {
//     firstName: "Eddy",
//     lastName: "Lee",
//   },
// ]

function filterByKey(items, searchFor, searchBy) {}

/*****************************************************************************/
/*
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]

    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      hasCovid[bool]

    return a new array of the names of people (not friends) who are at high risk of infection

    A person is at high risk of catching the virus if they meet all the below criteria:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom hasCovid

    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

// const friend1 = {
//   firstName: "Friend",
//   lastName: "One",
//   isSocialDistancing: false,
//   hasCovid: true,
// };

// const friend2 = {
//   firstName: "Friend",
//   lastName: "Two",
//   isSocialDistancing: false,
//   hasCovid: true,
// };

// const friend3 = {
//   firstName: "Friend",
//   lastName: "Three",
//   isSocialDistancing: false,
//   hasCovid: false,
// };

// const people = [
//   {
//     firstName: "Person",
//     lastName: "One",
//     isSocialDistancing: false,
//     friends: [friend2, friend3],
//   },
//   {
//     firstName: "Person",
//     lastName: "Two",
//     isSocialDistancing: true,
//     friends: [friend2, friend1],
//   },
//   {
//     firstName: "Person",
//     lastName: "Three",
//     isSocialDistancing: false,
//     friends: [friend2, friend1],
//   },
// ];

// const expected = ["Person One", "Person Three"];

function coronaVirusAtRisk(persons) {}

/*****************************************************************************/
/*
  Given an array of objects representing people, and a string representing a bad habit
  return a "santasNaughtyList" containing the first and last names of all the people who
  have the matching bad habit so that santa knows how much coal he needs.

  Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

// const students = [
//   {
//     firstName: "FN1",
//     lastName: "LN1",
//     habits: [
//       "doesn't wash dishes",
//       "falls asleep in lecture",
//       "shows up early",
//     ],
//   },
//   {
//     firstName: "FN2",
//     lastName: "LN2",
//     habits: ["shows up late", "washes dishes", "helps peers"],
//   },
//   {
//     firstName: "FN3",
//     lastName: "LN3",
//     habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
//   },
//   {
//     firstName: "FN4",
//     lastName: "LN4",
//     habits: ["shows up early", "helps peers", "washes dishes"],
//   },
// ];

// const badHabit1 = "doesn't wash dishes";
// const expected1 = ["FN1 LN1", "FN3 LN3"];

// const badHabit2 = "shows up late";
// const expected2 = ["FN2 LN2", "FN3 LN3"];

// const badHabit3 = "vapes too much";
// const expected3 = [];

function santasNaughtyList(persons, badHabit) {}
