//Understanding literal pattern matching
//Created by asxyzp

//Regex can be placed within //
//Regex doesn't requires ''
/*
	Strict regex won't be able to match loose forms
	/kevin/ won't be able to match KEVIN or Kevin
*/
var str1 = "The dog chases the cat";
var the = /the/;
console.log(the.test(str1));
console.log(the.test(str1.toLowerCase()));