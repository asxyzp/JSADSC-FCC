//Understanding arrays in JS
//By asxyzp (Aashish Loknath Panigrahi)

//Declaration of an array
var nameRoll = ["Aashish Loknath Panigrahi",1657];
console.log(nameRoll);

//Creating a nested array/multidimensional array
var nameRollArr = 
[
    ["Aashish Loknath Panigrahi",1657],
    ["Mogo Mogo",1658]
];
console.log(nameRollArr);

//Accessing array elements using index number based on zero-based indexing
console.log(nameRollArr[0][0],nameRollArr[0][1]);
console.log(nameRollArr[1][0],nameRollArr[1][1]);

//Mutability of array
//Changing array data w/ indexes
nameRollArr[1][0]="Meghna Roy Choudhury";
console.log(nameRollArr);

//Appending the array w/ an element using push()
var arr1=[1,2,3];
arr1.push([1,2,3]);
console.log(arr1);

var arr2=[["Aashish",1657]]
arr2.push(["Mogo Mogo",1658])
console.log(arr2)

//Removing last element of an array using pop()
var arr=[1,2,3];
rem1=arr.pop();     console.log(rem1,arr);
rem2=arr.pop();     console.log(rem2,arr);
rem3=arr.pop();     console.log(rem3,arr);
rem4=arr.pop();     console.log(rem4,arr);

//Removing the first element of array using shift()
var arr1=[1,2,3];
rem1=arr1.shift();     console.log(rem1,arr1);
rem2=arr1.shift();     console.log(rem2,arr1);
rem3=arr1.shift();     console.log(rem3,arr1);
rem4=arr1.shift();     console.log(rem4,arr1);

//Adding elements to the beginning of the array using unshift()
arr1.unshift(3);        console.log(arr1);
arr1.unshift(2);        console.log(arr1);
arr1.unshift(1);        console.log(arr1);