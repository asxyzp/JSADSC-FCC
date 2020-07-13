/*
	Problem 6 : Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
	Created by asxyzp
*/
function removeCommonElements(arr){
	for(let i=0;i<arr.length-1;i++){
		//While there are common elements in the array
		while(arr.indexOf(arr[i],i+1)!=-1){
			//Then remove the common elements
			arr.splice(arr.indexOf(arr[i],i+1),1);
		}
	}
	return arr;
}

function uniteUnique(arr) {
  //First try to union the arrays which have been passed
  //Going through all non-arr arguments & pushing their values into arr
  for(let i=1;i<arguments.length;i++){
	  for(let j=0;j<arguments[i].length;j++){
		  arr.push(arguments[i][j]);
	  }
  }
  arr = removeCommonElements(arr);
  return arr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));