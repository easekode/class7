function findVowels() {
  var arr = ['a', 'e', 'x', 'o'];
  //0,3, 4
  for (i = 0; i <= arr.length - 1; i++) {
    // check if arr[i] is one of <- a, e, i, o, u
    // print that arr[i] is vowel
    if (
      arr[i] === 'a' ||
      arr[i] === 'e' ||
      arr[i] === 'i' ||
      arr[i] === 'o' ||
      arr[i] === 'u'
    ) {
      console.log(arr[i] + ' is a vowel');
    }
  }
}

findVowels();
