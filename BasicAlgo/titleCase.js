function titleCase(str) {
  str=str.toLowerCase();
  let strArr = str.split(' ');
  for(let i=0;i<strArr.length;i++){
	  strArr[i]=strArr[i][0].toUpperCase()+strArr[i].substr(1);
  }
  str=strArr.join(' ');
  return str;
}