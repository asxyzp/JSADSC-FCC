/*
	Problem 12 : Sum of all odd fibonacci numbers
	Created by asxyzp
*/

//Function will generate all fibonacci numbers less than or equal to num
function generateFibonacciTill(num){
	let fibonacciArr = [1,1];
	if(num==1)
		return fibonacciArr;
	else if(num>1)
	{
		while (fibonacciArr[fibonacciArr.length-1]<=num)
		{
			//Will generate new fibonacci value based on last two values
			let newVal = fibonacciArr[fibonacciArr.length-1]+fibonacciArr	[fibonacciArr.length-2];
			//New value will be pushed to the array only when it's < num
			//Otherwise the array will be returned
			if(newVal <= num){
				fibonacciArr.push(newVal);
			}
			else{
				return fibonacciArr;
			}
		}
	}
}

//Function will generate sum of all fibonacci numbers
function sumOddFibonacci(fibonacciArr){
	let oddSum = 0;
	for(let i=0;i<fibonacciArr.length;i++){
		if(fibonacciArr[i]%2==1){
			oddSum+=fibonacciArr[i];
		}
	}
	return oddSum;
}

function sumFibs(num){
	//Will generate all fibonacci numbers less than or equal to num
	let fibonacciArr = generateFibonacciTill(num);
	let oddSum = sumOddFibonacci(fibonacciArr);
	return oddSum;
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(75024));
console.log(sumFibs(4));
console.log(sumFibs(75025));