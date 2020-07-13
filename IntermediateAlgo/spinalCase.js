/*
	Problem 5 : Convert a string to spinal case. 
	Created by asxyzp
*/

//String of any form will be converted into a general form
function generalForm(str){
	for(let i=0;i<str.length;i++){
		//Convert space to -
		if(str[i]==' ')
			str=str.substr(0,i)+'-'+str.substr(i+1);
		//Convert _ to -
		else if(str[i]=='_')
			str=str.substr(0,i)+'-'+str.substr(i+1);
		//Converting camelCase to -
		else if((str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)&&(str.charCodeAt(i-1)>=97 && str.charCodeAt(i-1)<=122)){
			str=str.substr(0,i)+'-'+str.substr(i);
		}
	}
	return str.toLowerCase();
}

function spinalCase(str){
	str = generalForm(str);
	return str;
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));