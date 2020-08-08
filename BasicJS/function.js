//Understanding functions in JS
//By asxyzp (Aashish Loknath Panigrahi)

//Functions are a reusable block of code that performs a specific computation
function reusableFunction()
{
  console.log("Hi World");
}
reusableFunction();

//Parameters are variables that acts as a placeholder for value, that is to be input to functions
//Example1
function functionWithArgs(param1,param2)
{
  console.log(param1+param2);
}
functionWithArgs(1,1);
functionWithArgs("Hello,"," World!");
//Example2
function printArgs(param1,param2)
{
    console.log(param1,param2);
}
printArgs(1,1);
printArgs("Hello,"," World!");

//Scope basically refers to the visibility of code
//Global scope : Variables declared outside function
//             : Variables declared w/o 'var' (automatically)[NOT RECOMMENDED]
helloWorld = "hw";                             //Global variable
var hellow = "hw";                             //Global variable
console.log(helloWorld);
console.log(hellow);

//Check for error by uncommenting console.log(hw); -- [IMP]
function func(){hw="Hello World!";}
//console.log(hw);

function printhewo(param1)
{
    var hewo="hw";                             //Local variable
    console.log(param1);                       //Parameters also have a local scope w/in a function
    console.log(hewo);
}
printhewo("hw");
//console.log(hewo);                            //Will give error when uncommented


//Global vs Local scope of variables :
//Local variable will override the value of global variable
var name ="aashish";                            //Global variable
function func()
{
    var name = "mogo mogo";                     //Local variable
    return name;
}
console.log(func());

//Returning a value from function using "return"
//Example 1
function sayHello(word)
{
    return "Hello, "+word;
}
console.log(sayHello("world"));
console.log(sayHello("Aashish"));
//Example 5
function add(num1,num2){return num1+num2;}
console.log(add(1,1));

//undefined return value of function
//Example1
function doesNothing(){}
console.log(doesNothing());
//Example2
var sum = 0;
function addThree(){sum = sum + 3;}
function addFive(){sum+=5;}
addThree();
addFive();
console.log(sum);

//typeof function will be the typeof return value of function
console.log(typeof(doesNothing()));
console.log(typeof(sayHello("Aashish")));

//Assignment with return value
function fullName(firstName,lastName)
{return firstName+" "+lastName;}
var yourName = fullName("Aashish","Panigrahi");

//Stand-in-line
function standInLine(arr,item)
{
    arr.push(item);
    return arr.shift();
}
var arr=[0,1,2,3,4,5,6,7,8,9];
console.log("Before: ",JSON.stringify(arr));
standInLine(arr,10);
console.log("After: ",JSON.stringify(arr));
console.log();
console.log();

//Testing whether a function can return multiple values
const helloName = (greeting,firstName,randomWord) => {
	return greeting, name, randomWord;
}
let greet, firstName,randomWord = helloName("Hello","Aashish","Mogo Mogo");
console.log(greet+" "+firstName+" "+randomWord);

// Returning early pattern from the function
function abTest(a, b) {
	if(a<0 || b<0)
    	return undefined;
	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
