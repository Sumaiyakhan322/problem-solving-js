//1.What is Js?
//Ans: Js is a scripted language for web that makes a website interactive.It can change and update HTML abd CSS.It makes the website dynamic.


//2.How does the js work?
//Ans:JavaScript is an interpreted language. This means we do not have to compile the JavaScript source code before sending it to the browser. An interpreter can take the raw JavaScript code and run it for you.


//3.What is a variable?
//Ans: In JavaScript, a variable stores data that can be changed later on.All JavaScript variables must be identified with unique names.example:var name='Sumaiya'. here name is the identifier that stores data sumaiya that can be changed any time.


//4.Declare a Variable
//Ans:A variable stores data.Ex:var number=20; here number is the identifier .


//5.Types of a variable?How can find out the type of the variable?
//Ans:1.string 2.number 3.boolean
//var name='sumaiya' is a string type variable
//var number=20 is a number type variable
//var isYourNameSumaiya=true is a boolean type variable.


//6.Primitive and non primitive data type
//Ans:Primitive data types:number,string,boolean,undefined,null
//non primitive data types:object and array


//7.Convention of js variables?
//Ans:Names can contain letters, digits, underscores, and dollar signs.
//Names must begin with a letter. ex:var name is alright but var 1name is not allowed 
//Names can also begin with $ and _ (but we will not use it in this tutorial).
//Names are case sensitive (y and Y are different variables).ex:nameSum and namesum they are not same 
//Reserved words (like JavaScript keywords) cannot be used as names. ex:var if =90 is not allowed if is a reserved word.


//8.Math operator:+,-,*,/,%
// var a=14 ; var b=10;
// a+b (14+10)
//a-b(14-10)
//a*b(14*10)
//a/b(14/10)
//a%b(14%10) ans:4 it means the remainder


//9.Short hand:+=,-=,*=,/=
//a=90;
// a+=5; a=a+5 a=90+5
//a-=5 ; a=a-5 a=90-5
//a*=5 ; a=a*5 a=90*5


//10.Increment or decrement (++ ,--)
//a=7;
//a++ a=a+1 a=7+1
//a-- a=a-1 a=7-1


//11.ParseInt and ParseFloat
//Ans:ParseInt to convert "10" to number that means it convert string to number 
//parseFloat converts a decimal string to number ex:'50.900' to 50.900
var num1='90';
console.log(typeof(num1));//string
var num2=parseInt(num1);
console.log(typeof(num2));// number

var num3='89.809';
console.log(typeof(num3));//string
var num4=parseFloat(num3);
console.log(typeof(num4));// number

var name1="sumaiya";
var changeName=parseInt(name1);
console.log(typeof(changeName));// number
console.log(changeName+10);//Nan


//12.toFixed 
//Ans: toFixed fix the decimal point
var a=908.088754;
var b=a.toFixed(4);
console.log(b);//908.0888






