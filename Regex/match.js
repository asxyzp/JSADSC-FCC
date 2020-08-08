//Finding the first pattern match()
//Created by asxyzp
let extractStr = "Extract the word 'coding' from this string that contains coding word.";
let codingRegex = /coding/i;
let result = extractStr.match(codingRegex);
console.log(result);
console.log(result.index);