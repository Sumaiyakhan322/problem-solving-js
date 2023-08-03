//1.Display "ajk amr mon valo nei " for 39 times

for(i=1;i<=39;i++){
    console.log(i+ " "+"Ajk amr mon valo nei");
}

//2.Display  numbers between 58 to 98
console.log('Display  numbers between 58 to 98');
var initialNumber=58;
while(initialNumber<=98){
    console.log(initialNumber);
    initialNumber++;
 }

 //3.show all even numbers from 412 to 456
 console.log('All even numbers from 412 to 456');
 for(var i=412;i<=456;i+=2){
    console.log(i);
 }

 //4.Show all odd numbers from 581 to 623
 console.log('Show all odd numbers from 581 to 623');
 for(var i=581;i<=623;i+=2){
    console.log(i);
 }


 //5.Difference between while and for loop
 //Ans:The major difference between for loop and while loop is that in the case of for loop the number of iterations is known whereas in the case of the while loop number of iterations is unknown and the statement will run until the condition is proved false.

 //6.Declare a array and display them as output
 console.log('Display array element with for loop');
 var arr1=["AA", "BB", "CC", "DD"];
 for(i=0;i<arr1.length;i++){
    var valueOFArray=arr1[i];
    console.log(valueOFArray);
 }

 //7.Display a array and display them with while loop
 console.log('Display a array and display them with while loop');
 var arr2=['Samsung', 'Nokia','Poko', 'Narzo', 'Iphone']
 var arr2Element=0;
 while(arr2Element<arr2.length){
    console.log(arr2[arr2Element]);
    arr2Element++;
 }


 //8.Run a loop from 30 to 86 this loop will stop if the values get higher than 50
 console.log('Run a loop from 30 to 86 this loop will stop if the values get higher than 50');
 for(i=30;i<=86;i++){
    
    if(i>50){
        break;
    }
    console.log(i);
    
 } 


 //9.write down the price of your books and display the prices that are lower then 200
  console.log('write down the price of your books and display the prices that are lower then 200');
 var priceOfBooks=[200,456,34,876,120,78,145,900,50,199,654];
 console.log(priceOfBooks);
 for(i=0;i<priceOfBooks.length;i++){
    
    if(priceOfBooks[i]>=199){
        continue;
    }
    console.log(priceOfBooks[i]);
    
 }


