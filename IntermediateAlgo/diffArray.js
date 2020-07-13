/*
	Problem 2 : Find the symmetric difference between two arrays
	Created by asxyzp
*/
function diffArray(arr1,arr2){
	let common = [];	//Will store common elements b/w array1 & array2

	//Removing common elements from array2
	for(let i=0;i<arr1.length;i++){
		//Checks whether element of array1 is within array2
		if(arr2.indexOf(arr1[i])!=-1){
			//If so, then element is removed from array2
			//And added to the common array
			//[0] at end since output of splice() will be an array with one element
			common.push( arr2.splice( arr2.indexOf(arr1[i]),1 )[0]);
		}	
	}
	
	//Removing common elements from array1
	for(let i=0;i<common.length;i++){
		//Checks whether a common element is in array1
		if(arr1.indexOf(common[i])!=-1){
			//If so, then element is removed from array1
			arr1.splice(arr1.indexOf(common[i]),1);
		}
	}

	common = [];	//For merging common elements of the array into one element
	//When array1 is empty
	if(arr1.length==0 && arr2.length!=0)
		return arr2;
	//When array2 is empty
	else if(arr1.length!=0 && arr2.length==0)
		return arr1;
	//When both array1 & array2 are empty
	else if(arr1.length==0 && arr2.length==0)
		return [];
	//When neither array1 & array2 are empty
	else if(arr1.length!=0 && arr2.length!=0){
		//Pushing all elements of array1 to common
		for(let i=0;i<arr1.length;i++)
			common.push(arr1[i]);
		//Pushing all elements of array1 to common
		for(let i=0;i<arr2.length;i++)
			common.push(arr2[i]);
		return common;
	}
}

console.log(diffArray([1,2,3,5],[1,2,3,4,5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));