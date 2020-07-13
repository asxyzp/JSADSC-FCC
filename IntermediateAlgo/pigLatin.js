/*
	Problem 6 : Convert text into pig latin
	Created by asxyzp
*/
function translatePigLatin(str) {
	let shift=0;	//Will store how many times shift has occured
	//When the first character of the string is a consonant
	while(str[0]!='a'||str[0]!='e'||str[0]!='i'||str[0]!='o'||str[0]!='u'){
		//The loop would break if the first character is equal to a vowel
		if(str[0]=='a'||str[0]=='e'||str[0]=='i'||str[0]=='o'||str[0]=='u')
			break;
		//The loop would break of the shift is greater than string length
		if(shift>=str.length)
			break;
		++shift;
		str=str.substr(1)+str[0];	//Shift consonant to backward
	}
	//Append 'ay' to the end when shift>0
	if(shift>0){
		str+='ay';
	}
	//Append 'ay' to the end when shift>0
	else if(shift==0){
		str+='way';
	}
  	return str;
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));