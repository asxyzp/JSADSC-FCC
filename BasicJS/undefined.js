//Understanding the concept of a undefined data type in JS
//By asxyzp (Aashish L. Panigrahi)

//undefined data type is an unintentional absence of value
//undefined is the default value of a variable, when not assigned a value
var a,b=0,c=a+b;
console.log(c,typeof(c));     //o/p will be NaN

var a,b="",c=a+b;
console.log(c,typeof(c));     //o/p will be "undefined"