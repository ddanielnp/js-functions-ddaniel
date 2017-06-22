function result (numbers) {
  var i = 0
  var count = 0
  while (i < numbers.length) {
    count = numbers[0] * numbers[i]
    i++
    console.log(count)
  }
}

result([4, 3, 5, 7, 9])
