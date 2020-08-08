function confirmEnding(str,target){
	let targetLen = target.length;
	let splicedStr = str.substr(str.length-targetLen);
	if(splicedStr==target)
		return true; 
	else
		return false;
	
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));