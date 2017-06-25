function letterCount(str) {
  var strArr = str.split('')
  var occurence = {}

  for (var i = 0;i < strArr.length; i++) {
    var letter = strArr[i]
    if (occurence[letter]) {
      occurence[letter] += 1
    } else {
      occurence[letter] = 1
    }
  }
  return occurence
}

vartheObj = {}
theObj.a = 'first'
theObj['b'] = 'second'
