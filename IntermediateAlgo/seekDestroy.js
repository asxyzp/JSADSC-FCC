/*
	Problem 3 : You will be provided with an initial array followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
	Created by asxyzp
*/

function destroyer(arr){
	for(let i=1;i<arguments.length;i++){
		//The passed argument could also be a string
		//When string is the argument then Number(arg) will be NaN
		if(Number.isNaN(Number(arguments[i]))){
			//To check whether the argument is within the array
			if(arr.indexOf(String(arguments[i]))!=-1){
				//For removing all arguments from the array
				while(arr.indexOf(String(arguments[i]))!=-1){
					arr.splice(arr.indexOf(String(arguments[i])),1);
				}
			}
		}
		//When passed argument is a number
		else{
			//To check whether the argument is within the array
			if(arr.indexOf(Number(arguments[i]))!=-1){
				//For removing all arguments from the array
				while(arr.indexOf(Number(arguments[i]))!=-1){
					arr.splice(arr.indexOf(Number(arguments[i])),1);
				}
			}
		}
	}
	return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
