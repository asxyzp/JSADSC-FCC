//Understanding objects
//Created by Aashish Loknath Panigrahi (asxyzp)

var myDog = {
    name : "Bhondu",
    legs : 4,
    tails : 1,
    friends : ["Aashish","MOGO MOGO"]
};

//Accessing object using dot notation
console.log(myDog.name);
console.log(myDog.legs);
console.log(myDog.tails);
console.log(myDog.friends);

//Accessing object using bracket notation
console.log(myDog["name"]);
console.log(myDog["legs"]);
console.log(myDog["tails"]);
console.log(myDog["friends"]);

//Accessing value of object property values stored in a variable
let name = "name";
let legs = "legs";
let tails = "tails";
let friends = "friends";
console.log(myDog[name]);
console.log(myDog[legs]);
console.log(myDog[tails]);
console.log(myDog[friends]);

//Updating object properties
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy "+myDog.name;

//Adding a new key-value pair to the object 
myDog["bark"]="woof";
console.log(myDog.bark);

//Deleting object key from a given object
delete myDog["bark"];
console.log(myDog.bark);

//Using objects for lookup instead of switch-case
function phoneticLookup(val) {
  var result = "";
  var valObj = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  }
  return valObj[val];
}
console.log(phoneticLookup("charlie"));

//To check whether a given property is in an object
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp))
    return obj[checkProp];
  else
    return "Not Found";
}
var nameObj = {
	firstName : "Aashish",
	lastName : "Panigrahi"
}
console.log(checkObj(nameObj,"firstName"));
console.log(checkObj(nameObj,"middleName"));

//JS Objects' key's values can store data of any given data types
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
];
console.log(myMusic);