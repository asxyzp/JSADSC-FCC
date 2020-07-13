//Understanding strings in JS
//By asxyzp (Aashish Loknath Panigrahi)

//Declaring string variable
var myFirstName="Aashish";
var myLastName="Panigrahi";
console.log(myFirstName,myLastName);

//Escaping literal quotes in a string
var quotes = "And the god said, \"Let there be light.\"";
console.log(quotes);

//Single quote & double quote string
var singleQuoteStr = 'This is a string.';
var doubleQuoteStr = "This is also string.";
console.log(singleQuoteStr,' ',doubleQuoteStr);
//var wrongStr = 'This won/'t work"

//Quotes within a string
var goodStr = 'Hello, "World"!';
var anotherGoodStr = "Hello, \"World\"!";
//var badStr = "Hello, "World"!";           //Will throw error
console.log(goodStr);
console.log(anotherGoodStr);

//Escape sequences
console.log("\nHello, \'World\'!");         //\' escape sequence
console.log("Hello, \"World\"!");           //\" escape sequence
console.log("File name : C:\\ExperimentsInCS\\Images");           //\\ escape sequence
console.log("Aashish\nPanigrahi.");         //\n escape sequence
console.log("Aashish\t\t\tPanigrahi.");     //\t escape sequence
console.log("Aashish\rPanigrahi\rLoknath");         //\r escape sequence
console.log("Aashish\fPanigrahi\fLoknath");         //\f escape sequence
console.log("Aashish\bPanigrahi\bLoknath");         //\b escape sequence

//String concatenation
//Concatenation doesn't adds spaces
var fullName = myFirstName+" "+myLastName;
console.log(fullName);

//String concatenation using += operator
var hw = "Hello, ";
hw += "World!";
console.log(hw);

//Concatenating string  variable to a string literal
var world = "World!";
hw = "Hello, "+world;
console.log(hw);

//Concatenating one string variable w/ another string variable using +=
var hello="Hello, ",world="World!"
hello+=world;
console.log(hello);

//To find the length of a string
var firstName = "Aashish";
var lastName = "Panigrahi";
fullName = firstName +" "+lastName;
console.log("Length of the name \"",fullName,"\" is",fullName.length);

//Zero-based indexing
var firstName = "Aashish";
var firstLetterFirstName = firstName[0];
var lastLetterFirstName = firstName[firstName.length-1];
console.log("First & last letters of",firstName,"is ",firstLetterFirstName," & ",lastLetterFirstName);

//String immutability
var str = "Aashish";
str[0]="H";
console.log(str);               //No change, as string is immutable
str = "Hashish";
console.log(str);               //String can be change only by assignment to a new string
console.log(str[0],str[1],str[2],str[3],str[4],str[5],str[6]);  //Finding nth char in a string
//Finding nth to last character in a string :
console.log(str[str.length-1],str[str.length-2],str[str.length-3],str[str.length-4],str[str.length-5],str[str.length-6],str[str.length-7]);

//Word blancks game
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = "My "+myAdjective+" "+myNoun+" got very scared, so he "+myVerb+" back to his home, very "+myAdverb+".";
console.log(wordBlanks); 