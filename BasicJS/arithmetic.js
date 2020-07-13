//Understanding arithmetic operations in JS
//By asxyzp (Aashish L. Panigrahi)

//Addition of two numbers
var a= 10, b=20, c;
c = a+b;    
var d="Hello";
console.log(c,  c+d,    true+c,     false+c,    true+false,     d+false, true+true);
console.log(true+"Hello");

//Subtraction of two numbers
c = a-b;    
console.log(c,  d-c);

//Multiplication of two numbers
c = a*b;    
console.log(c,Infinity*-1, -Infinity*-1 ,  Infinity*0,    Infinity*Infinity, Infinity*-Infinity,   d*2);
console.log(typeof(Infinity),typeof(-Infinity),typeof(NaN));

//Division of two numbers
c = a/b;    
console.log(c,  c/0,    c/-0);

//Increment operator
console.log(a++);       //Increments it & returns the value before incrementation
                        //Output = 10, Incrementation after output : 11
console.log(++a);       //Returns value after incrementation
                        //Output = 12

//Decrement operator
console.log(a--);       //Decrements it & returns the value before decrementation
                        //Output = 12, Decrementation after output : 11
console.log(--a);       //Returns the value after decrementation
                        //Output = 10

//Rounding off error in JS
console.log((1.2+1.2)==1.4)

//Arithmetic operations on floats
console.log(1.2*1.2)    //Mulitplication
console.log(1.2/1.44)   //Division

//Remainder (%) operator
console.log(5%2)        //1
console.log(4%2)        //0
console.log(-5%2)       //-1, which shows that this isn't modulus o/p as it's o/p would be 3

//Compound assignment with augmented addition
a = 10;
console.log(a+=1);
//Compound assignment with augmented subtraction
console.log(a-=1);
//Compound assignment with augmented Multiplication
console.log(a*=2);
//Compound assignment with augmented Division
console.log(a/=20);