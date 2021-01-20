/*
  Optional chaining is a newer syntax that can help with this problem in general (not necessarily intended to be used here):
    https://levelup.gitconnected.com/new-javascript-features-in-2019-optional-chaining-null-coalescing-a7fd38f4ef2d

  The more you deal with objects, especially ones with many nested objects, where you
  are chaining dot notation to access nested values, the more you run into these errors:
    Uncaught TypeError: Cannot read property 'keyName' of undefined
    Uncaught TypeError: Cannot read property 'keyName' of null

  These errors mean, somewhere along your chain of dots, one of the keys did not exist
  on the object so it returned undefined, and then the next dot was trying to access
  a key on undefined, or the key did exist but null was it's value.

  One example of how this might happen is getting JSON data back from an API. Sometimes,
  the record you requested has more data so there are more levels of nesting, which you get used to,
  so you write your code to access the nested data but then you request a different record, and
  less data is available, so your code breaks when trying to access nested data that isn't there.

  There is an entire library dedicated to solving this problem, the solution is referred to as a "lens",
  you look through a "lens" to help you see into an object and safely attempt to access a nested value.

  Without a lens, you would need to interrupt your dot chaining and check the value after each dot,
  one at a time, to make sure it is not undefined or null before going to the next dot.

  Input:
    Object,
    Array of strings representing a path of keys in the Object

  Output:
    - Value from traversing the object to the last key
    - null if at any point accessing a key returns undefined
      - this means a key was not found / the Object was not nested as deep as the path of keys goes
    - the given object if array of keys is empty
*/

// const user = {
//   id: 101,
//   email: "jack@dev.com",
//   personalInfo: {
//     name: "Jack",
//     address: {
//       line1: "westwish st",
//       line2: "washmasher",
//       city: "wallas",
//       state: "WX",
//     },
//   },
//   favorites: {
//     number: 0,
//   },
// }

// const keys1 = ["personalInfo", "address", "city"]
// const expected1 = "wallas"

// const keys2 = ["personalInfo", "address", "country"]
// const expected2 = null

// const keys3 = ["personalInfo", "mainHobby", "yearsActive"]
// const expected3 = null

// const keys4 = ["favorites", "number"]
// const expected4 = 0

// const keys5 = []
// const expected5 = user

function lens(obj, keys) {}

/*****************************************************************************/

/*
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.
  Input:

    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)

  Output:
    int (max servings)

  Side note (not needed for solution): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the avaialable ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

// const recipe1 = {
//   "organic fat": 99,
//   "live squid": 1,
//   "birds nest": 1,
//   "fried flesh": 1,
//   spicy: 5,
//   "gourmet memes": 4200,
// };

// const available1 = {
//   "organic fat": 990,
//   "live squid": 1,
//   "birds nest": 10,
//   "fried flesh": 10,
//   spicy: 50,
//   "gourmet memes": 42000,
//   sugar: 9001,
//   spice: 5,
//   "everything nice": 1,
//   "triple point water": 5,
// };
// const expected1 = 1;
// // because only 1 live squid is available and that is the limiting ingredient

// // same as available1, except live squid has 10
// const available2 = { ...available1, ["live squid"]: 10 };
// const expected2 = 10;

// const available3 = { ...available1, ["live squid"]: 0 };
// const expected3 = 0;

function getMaxServings(recipe, available) {}
