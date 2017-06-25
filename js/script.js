// console.log('trying some changes')
//
// // function pausecomp (millis) {
// //   var date = new Date()
// //   var curDate = null
// //
// //   while (curDate - date < millis) {
// //     curDate = new Date()
// //   }
// //
// //   alert('done pausing')
// // }
// //
// // pausecomp(3000)

// var answer = prompt('Please type a number')
// alert('the answer is' + answer)

// update the h1 to say higher or lower
// or if the number guess is correct, we change the body color

// fn that checks numbers with the random number
function higherOrLower (guessedNum, randomNumber) {
  console.log('randomNumber is', randomNumber)
  if (guessedNum > randomNumber) {
    updateH1('lower, randomNumber is ' + randomNumber)
  } else if (guessedNum < randomNumber) {
    updateH1('higher, randomNumber is ' + randomNumber)
  } else {
    updateH1('correct')
  }
}

// this fn. updates h1 text content
function updateH1(newH1) {
  var h1 = document.querySelector('h1')
  // var h1 = document.getElementsByTagName('h1')

  // updated the property of h1 dom node
  h1.textContent = newH1
}

// fn that generates randomNum
// min and max always whole number
// random number between min and max (exclusive)
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

// calling of the function
higherOrLower(
  // changed 7 into the prompt number
  7, randomNumber(0, 7)
)
