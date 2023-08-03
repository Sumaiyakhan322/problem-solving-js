//1. what is the purpose of an array?
//Ans:Array is a collection of same data types.It stores multiple values in a single variable.

//2.declare a array in js
//Ans:var numbers=[10,20,30,40]
//var names=["X" , "Y" ,"Z"]
// we must ensure values that are stored in array same data type

//3.number of elements in an array
var numbers=[10,20,30,40,50,60]
console.log(numbers);


//4.What is the index of a array?
//Ans:Index indicates the position of an element of an array.In array index starts with 0


//5.Find the value of an element by index?
numbers=[10,20,30,40,50,60];
var numberInPosition1=numbers[1];
console.log(numberInPosition1);


//6.Change the element by index
numbers=[10,20,30,40,50,60];
numbers[1]=100;
console.log(numbers);


//7.Get the index by the value of an elements
var letters=["A" ,"B" , "C" ,"D" ,"E"];
console.log(letters);
var indexOfA=letters.indexOf("A");
console.log(indexOfA);


//8.what does it mean when you get undefined  while getting the value of an element?
//Ans:when we search  for any element with index but the index  does not belong to the array ,we get undefined. We can find any element by index but when the index  does not belong to the array we get undefined
var letters=["A" ,"B" , "C" ,"D" ,"E"];
var findLetterG=letters[6];
console.log(findLetterG);


//9.add element at the last position
var letters=["A" ,"B" , "C" ,"D" ,"E"];
console.log(letters);
var addLetter=letters.push("F");
console.log(letters);

//10.delete element from the last position
var letters=["A" ,"B" , "C" ,"D" ,"E"];
console.log(letters);
var deleteLastLetter=letters.pop();
console.log(letters);
console.log(deleteLastLetter);


//11.Add element at the 1st position
var intNumbers=[1,2,3,4,5];
console.log(intNumbers);
var addNewInt=intNumbers.unshift(0);
console.log(intNumbers);


//12.delete element from the 1st position
var intNumbers=[1,2,3,4,5];
console.log(intNumbers);
intNumbers.shift()
console.log(intNumbers);


