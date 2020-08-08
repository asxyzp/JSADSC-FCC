function frankenSplice(arr1, arr2, n) {
  
  let newArr2 = arr2.slice(0);
  let spliceArr2 = newArr2.splice(n);
  for(let i=0;i<arr1.length;i++)
  {
	  newArr2.push(arr1[i]);
  }
  for(let i=0;i<spliceArr2.length;i++){
	  newArr2.push(spliceArr2[i]);
  }
  return newArr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));