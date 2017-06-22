function maxOfThree (num1, num2, num3) {
  var largestNum = 0
  if (num1 > largestNum) {
    largestNum = num1
  } if (num2 > largestNum) {
    largestNum = num2
  } if (num3 > largestNum) {
    largestNum = num3
  }
  return largestNum
}

console.log(maxOfThree(1000, 33, 443))
