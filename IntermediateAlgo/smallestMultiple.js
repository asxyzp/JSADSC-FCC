/*
	Problem 14 : Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
	Created by asxyzp
*/

//Generates all values in between arr[0] & arr[1]
function generateFullArr(arr){
	let newArr=[];
	if(arr[0]<arr[1]){
		for(let i=arr[0];i<=arr[1];i++){
			newArr.push(i);
		}
		return newArr;
	}
	else if(arr[1]<arr[0]){
		for(let i=arr[1];i<=arr[0];i++){
			newArr.push(i);
		}
		return newArr;
	}
}

//Finding LCM for two values
function findLCM(val1,val2){
	let divisor1 = [];	//Stores all divisors of val1
	let divisor2 = [];	//Stores all divisors of val2 
	let common = [];	//Stores all common divisors to val1 & val2
	//Storing all divisors of val1 into divisor1
	for(let i=1;i<=val1;i++){
		if(val1%i==0){
			divisor1.push(i);
		}
	}
	//Storing all divisors of val1 into divisor2
	for(let i=1;i<=val2;i++){
		if(val2%i==0){
			divisor2.push(i);
		}
	}
	//Storing all common divisors of val1 & val2
	for(let i=0;i<divisor1.length;i++){
		if(divisor2.indexOf(divisor1[i])!=-1){
			common.push(divisor1[i]);
		}
	}
	//Returns a*b/GCD(a,b)
	common = common.sort(function(a,b){return a-b;});
	return val1*val2/(common[common.length-1]);
}

function findLCMArr(arr){
	let count = 0;		//Keeps count of how many times LCM have been done
	let LCMArr = [];	//WIll store LCM value & next array element
	LCMArr.push(findLCM(arr[0],arr[1]));
	for(let i=2;i<arr.length-1;i++){
		LCMArr.push(arr[i]);
		console.log(LCMArr);
		LCMArr[0]=findLCM(LCMArr[0],LCMArr[1]);
	}
	
}

function smallestCommons(arr){
	let fullArr = generateFullArr(arr);
	console.log(fullArr);;
	findLCMArr(fullArr);
}

smallestCommons([1, 5]);