function findLongestWordLength(str) {
  let wordsArr = str.split(" ");
  let wordsLenArr = [];
  for(let i=0;i<wordsArr.length;i++){
    wordsLenArr.push(wordsArr[i].length);
  }
  console.log(wordsLenArr);
  wordsLenArr = wordsLenArr.sort(function(a, b){return a-b;});
  return wordsLenArr[wordsLenArr.length-1];
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));