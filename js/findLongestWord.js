function findLongestWord (long) {
  var word = []
  for (var i = 0; i < long.length; i++) {
    if (long[i].length > word.length) {
      word = long[i]
    }
  } return word
}

console.log(findLongestWord(['hello', 'world', 'mississippi', 'you']))
