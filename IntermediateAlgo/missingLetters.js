/*
	Problem 9 : Find the missing letter in the passed letter range and return it.
	Created by asxyzp
*/
function fearNotLetter(str) {
	for(let i=0;i<str.length-1;i++){
		//If the difference between UTF-16 code of the current & next character isn't one
		if((str.charCodeAt(i+1)-str.charCodeAt(i)!=1)){
			//Then return the missing character
			//String.fromCharCode(arg) converts UTF-16 to String
			//str.charCodeAt(arg) converts character to UTF-16
			return String.fromCharCode(str.charCodeAt(i)+1);
		}
	}
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));