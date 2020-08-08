//Understanding the concept of a variable in JS
//By asxyzp (Aashish L. Panigrahi)


//Additon of number & string would lead to number's conversion into string
var x = 16 + "volvo";
var y = "volvo" + 16;

//JS evaluates expressions from left to right
var z = 1 + 2 + "volvo";
var a = "volvo" + 1 + 2;

console.log(x,y,z,a,"\n");

//JS is a dynamically typed language, meaning that same variable can stored values of different DTs
var x = "Hello";
console.log(x, typeof(x))
var x = {firstName:"Aashish", lastName:"Panigrahi"}; 
console.log(x, typeof(x));

//String data type
var x = "'Mahindra' XUV500"
var y = '"Mahindra" XUV500'
console.log("\n",x,y)

//Number data type
var p,q,r,s;
p = 123;
q = 123.00;
r = 123e1;
s = 12.3e-1;
console.log("\n",p,q,r,s,typeof(p));

//Boolean data type
var x,y,z;
x=1;    y=2;    z=3;
console.log("\n",(x==y),(x==z),(x==x),typeof((x==x)))   //used for condition testing

//Object data type
//Objects are a collection of properties, where a property is an association b/w name/key & value
//When a property's value is a function, then it's known as a method
var car = 
{
    name : "XUV500",
    brand: "Mahindra",
    weight: 1845,
    fuel_tank_capacity: 70,
    cargo_volume: 93
};
console.log("\n",car);

//Undefined data types
//Any variable w/ no defined value is of "undefined" data type
//Represents unintentional absence of value
var r0;
console.log("\n",r0);
r0=0.05;
console.log(r0);
r0=undefined;
console.log(r0,typeof(r0));

//Null data type
//Represents an intentional absence of value
var alpha = null;
console.log("\n",alpha,typeof(alpha));

//Syntax of variable declaration :
var variableName;

//Syntax of variable declaration & initialization using = (assignment operator) :
var variableName = 1;