/*
	Problem 13 : Write a function which returns the sum of all prime numbers that are less than or equal to num.
	Created by asxyzp
*/
function generatePrimesTillNum(num){
	
	let primeArr = [2];			//Since 2 is a prime no.
	for(let i=3;i<=num;i++){
		let count = 0;			//Keeps track of how many times was i divided by prime numbers stored in primeArr
		for(let j=0;j<primeArr.length;j++){
			//If i is divisible by a prime number then increase count by 1
			if(i%primeArr[j]==0){
				++count;
			}
		}
		//If count is 0 then push i into primeArr, since it isn't divisible by other primes 
		if (count==0)
			primeArr.push(i);

	}
	return primeArr;
}

function sumPrimes(num) {
	let primeArr = generatePrimesTillNum(num);
	let sum = 0;
	for(let i =0;i<primeArr.length;i++){
		sum += primeArr[i];
	}
	return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));