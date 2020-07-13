/*
	Problem 4 : Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
	Created by asxyzp
*/
function whatIsInAName(collection, source) {
  	var arr = [];
	
	//Will store all the keys of the source object in an array
	const sourceKeyArr = Object.keys(source);
	
	//Will store all the value of the key of the source object
	const sourceValArr = [];
	for(let i=0;i<sourceKeyArr.length;i++){
		sourceValArr.push(source[sourceKeyArr[i]]);
	}
	
	//Will search for source key == source value in all objects in the list 
	for(let i=0;i<collection.length;i++){
		//Stores how many key-value pairs are equal
		let equalCount = 0;
		for(let j=0;j<sourceKeyArr.length;j++)
		{
			//Checks whether sourceKeyArr value is in collection object
			if(sourceKeyArr[j] in collection[i]){
				//If so, then the value of the keys are compared
				if(source[sourceKeyArr[j]]==collection[i][sourceKeyArr[j]]){
					//If key & value are same, then equalCount is raised by 1
					equalCount++;
				}	
			}
		}
		if(equalCount==sourceKeyArr.length){
			arr.push(collection[i]);
		}
	}
  	return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));