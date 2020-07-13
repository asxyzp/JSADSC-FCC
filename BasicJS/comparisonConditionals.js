//Understanding comparison operators & conditional statements
//Created by asxyzp

//Understanding booleans
//Using conditional logic with if statements
//Comparison with equality operator
function isEven(num){
    if(num>0){
        if(num%2==0)
            return true;
        else
            return false;
    }
}
function isOdd(num){
    if(num>0){
        if(num%2==1)
            return true;
        else
            return false;
    }
}
console.log(isEven(2));
console.log(isEven(4));
console.log(isEven(6));
console.log(isEven(1));
console.log(isEven(3));
console.log(isEven(5));
console.log(isOdd(1));
console.log(isOdd(3));
console.log(isOdd(5));
console.log(isOdd(2));
console.log(isOdd(4));
console.log(isOdd(6));

console.log("\n");

//Comparison using equality operator
console.log(1==1);      //TRUE
console.log(1==2);      //FALSE
console.log(1=="1");    //TRUE
console.log(3==1);      //FALSE
console.log(3==3);      //TRUE
console.log("3"==3);    //TRUE
console.log(3=='Hello');

console.log("\n");

//Comparison using strict equality operator
console.log(3===3);     //TRUE
console.log(3===7);     //FALSE
console.log(3==='3');   //FALSE
console.log(3==='Hello');

console.log("\n");

//Comparison using inequality operator
console.log(1!=true);
console.log(0!=false);
console.log(true!=false);
console.log(3!=2);
console.log(3!="2");    //type coercion
console.log(3!="3");    //type coercion
console.log(3!='Hello');

console.log("\n");

//Comparison using strict inequality operator
console.log(1!==true);
console.log(0!==false);
console.log(true!==false);
console.log(3!==2);
console.log(3!=="2");    //type coercion
console.log(3!=="3");    //type coercion
console.log(3!==3);
console.log(3!=='Hello');

console.log("\n");

//Comparison using >
console.log(3>3);
console.log(3>4);
console.log(3>2);
console.log(3>'1');     //type coercion
console.log(3>'Hello');

console.log("\n");

//Comparison using >=
console.log(3>=3);
console.log(3>=4);
console.log(3>=2);
console.log(3>='1');     //type coercion
console.log(3>='Hello');

console.log("\n");

//Comparison using <
console.log(3<3);
console.log(3<4);
console.log(3<2);
console.log(3<'5');     //type coercion
console.log(3<'Hello');

console.log("\n");

//Comparison with <= opeartor
console.log(3<=3);
console.log(3<=4);
console.log(3<=2);
console.log(3<='5');     //type coercion
console.log(3<='Hello');

console.log("\n");

//Comparison with && operator
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);
console.log("\n");

//Comparison with || operator
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);
console.log("\n");

//else
if(false){
    console.log("This is false");
}
else{
    console.log("This is true\n");    //Will be execured
}

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5\n";
    }
    else {
      return "Between 5 and 10";
    }
  }
  
  console.log(testElseIf(7));
  console.log(testElseIf(11));
  console.log(testElseIf(4));

//Correct order of if-else statements is v. imp
function foo(val)
{
    if(val<1)
        return "<1";
    else if(val<2)
        return "<2";
    else
        return ">=2";
}
function bar(val)
{
    if(val<2)
        return "<2\n";
    else if(val<1)
        return "<1";
    else
        return ">=2";
}
console.log(foo(0));
console.log(bar(0));

function testSize(num) {
    // Only change code below this line
    if (num<5)
      return "Tiny";
    else if (num<10)
      return "Small\n";
    else if (num<15)
      return "Medium";
    else if (num<20)
      return "Large";
    else
      return "Huge";
    // Only change code above this line
  }
  
  console.log(testSize(7));