/*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.

  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

// const arr1 = [1, 2, 3]
// const separator1 = ", "
// const expected1 = "1, 2, 3"

// const arr2 = [1, 2, 3]
// const separator2 = "-"
// const expected2 = "1-2-3"

// const arr3 = [1, 2, 3]
// const separator3 = " - "
// const expected3 = "1 - 2 - 3"

// const arr4 = [1]
// const separator4 = ", "
// const expected4 = "1"

// const arr5 = []
// const separator5 = ", "
// const expected5 = ""

function join(arr, separator = ", ") {
  let joined = "";

  if (!arr.length) {
    return joined;
  }

  // less than arr.length - 1 to stop before last
  for (let i = 0; i < arr.length - 1; i++) {
    joined += arr[i] + separator;
  }
  return joined

/*****************************************************************************/

/*
  Book Index

  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

// const nums1 = [1, 13, 14, 15, 37, 38, 70];
// const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(pageNums) {
  let formattedPageNums = ""
  let pageRangeStartIdx = 0

  for (let i = 0; i < pageNums.length; i++) {
    let currentPageNum = pageNums[i]
    let nextPageNum = pageNums[i + 1]
    let pageRangeStopIdx = i

    // page range is not sequential
    if (currentPageNum + 1 !== nextPageNum) {
      // single page, no range
      if (pageRangeStartIdx === pageRangeStopIdx) {
        formattedPageNums += currentPageNum
      }
      // we have a page range
      else {
        formattedPageNums += `${pageNums[pageRangeStartIdx]}-${pageNums[pageRangeStopIdx]}`
      }
      if (i !== pageNums.length - 1) {
        formattedPageNums += ", "
      }

      // Since we've added a page range
      // need to get start idx set up for next page range
      pageRangeStartIdx = i + 1
    }
  }
  return formattedPageNums
}
