function sumArray (sum) {
  var add = sum.reduce(function (a, b) { return a + b }, 0)
  return add
}

function multiplyArray (times) {
  var multiply = times.reduce(function (a, b) { return a * b })
  return multiply
}

console.log(sumArray([1, 2, 3, 4]))
console.log(multiplyArray([1, 2, 3, 4]))
