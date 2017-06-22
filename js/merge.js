function mergeAndSort (arr1, arr2) {
  var merged = arr1.concat(arr2)
  var mergedThenSorted = merged.sort(function (a, b) { return a - b })
  return mergedThenSorted
}

console.log(mergeAndSort([3, 6, 11], [2, 4, 5, 8, 9]))
