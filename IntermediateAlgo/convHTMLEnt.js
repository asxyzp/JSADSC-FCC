/*
	Problem 11 : Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
	Created by asxyzp.
*/

function convertHTML(str) {
	for(let i=0;i<str.length;i++){
		//For &
		if(str[i]=='&')
			str=str.substr(0,i)+'&amp;'+str.substr(i+1);
		//For <
		else if(str[i]=='<')
			str=str.substr(0,i)+'&lt;'+str.substr(i+1);
		//For >
		else if(str[i]=='>')
			str=str.substr(0,i)+'&gt;'+str.substr(i+1);
		//For "
		else if(str[i]=='"')
			str=str.substr(0,i)+'&quot;'+str.substr(i+1);
		//For '
		else if(str[i]=="'")
			str=str.substr(0,i)+'&apos;'+str.substr(i+1);
	}
  	return str;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));