/*
	Problem 8 : Pairing the elemennts of a DNA strand
	Created by asxyzp
*/
function pairElement(str) {
	let baseArr = [];
	for(let i=0;i<str.length;i++){
		if(str[i]=='A')
			baseArr.push(['A','T']);
		else if(str[i]=='T')
			baseArr.push(['T','A']);
		else if(str[i]=='G')
			baseArr.push(['G','C']);
		else if(str[i]=='C')
			baseArr.push(['C','G']);
	}
  	return baseArr;
}

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));