/*
	Problem 1 : To return the sum of two numbers & the sum of all the numbers in between the range.
	Created by asxyzp
*/

/*
	Function : sumEnd(arr)
	Functionality : Returns the sum of two numbers in the array which is passed
	Parameter : arr - array
	Return value : Sum of first & second element of array
*/
function sumEnd(arr){
	return arr[0]+arr[1];
}

/*
	Function : sumBetween(smallerNo,largerNo)
	Functionality : Returns the sum of all numbers between the smaller number & larger number
	Parameters : smallerNo - Smaller of the two numbers of an array
				 largerNo - Larger of the two numbers of an array
	Return value : Returns the sum of all numbers between the smaller number & larger number
*/
function sumBetween(smallerNo,largerNo){
	let sum=0;
	for(let i=smallerNo+1;i<largerNo;i++)
		sum+=i;
	return sum;
}

/*
	Function : sumAll(arr)
	Functionality : Returns the sum of two numbers & the sum of all the numbers in between the range.
	Parameter : arr - array
	Return value :Returns the sum of two numbers & the sum of all the numbers in between the range.
*/
function sumAll(arr){
	return sumEnd(arr)+sumBetween(Math.min(arr[0],arr[1]),Math.max(arr[0],arr[1]));
}

console.log(sumAll([1,4]));
console.log(sumAll([4,1]));
console.log(sumAll([5,10]));
console.log(sumAll([10,5]));