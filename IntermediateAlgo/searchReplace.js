/*
	Problem 7 : Perform a search and replace on the sentence using the arguments provided and return the new sentence.
	Created by asxyzp
*/
function myReplace(str, before, after) {
	
	//When the first character of before is having lower case
	if(before.charCodeAt(0)>=97&&before.charCodeAt(0)<=122)
		str = str.substr(0,str.indexOf(before))	+after+	str.substr(str.indexOf(before)+before.length);
	
	//When the first character of before is having upper case
	else if(before.charCodeAt(0)>=65&&before.charCodeAt(0)<=90)
		str = str.substr(0,str.indexOf(before))	+after[0].toUpperCase()+after.substr(1)+	str.substr(str.indexOf(before)+before.length);
  	return str;
}

console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));