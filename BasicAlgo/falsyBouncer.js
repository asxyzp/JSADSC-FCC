function bouncer(array) {
	let elementsToRemove = [];
  	for(let i=0;i<array.length;i++){
	  if(Boolean(array[i])===false){
		  elementsToRemove.push(array[i]);
		}
	  }
	while(array.indexOf(elementsToRemove[0])!=-1){
		array.splice(array.indexOf(elementsToRemove[0]),1);
		if(array.indexOf(elementsToRemove[0])==-1){
			elementsToRemove.shift();
		}
	}	
  
  return array;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([null, NaN, 1, 2, undefined]));