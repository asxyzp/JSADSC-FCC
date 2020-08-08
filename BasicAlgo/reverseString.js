function reverseString(str) {
	let revStr = '';
	for(let i=1;i<str.length;i++){
		revStr+=str[str.length-i];
	}
	revStr+=str[0];
    return revStr;
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));