/*Print a Square

Write a function printSquare which is given a size and prints a square of that size using asterisks.

> printSquare(5) 
***** 
***** 
***** 
***** 
***** */

function printSquare(size){
    var star = "";

    for (var i=0; i<size; i++){
        star += "*"
        
    }

    for(var count=0; count<size; count++ ){
        
        console.log(star);
    }
} 

   
printSquare(5);