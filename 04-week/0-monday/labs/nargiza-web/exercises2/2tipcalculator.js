/*Tip Calculator

Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

good -> 20%
fair -> 15%
bad -> 10%
> tipAmount(100, 'good') 
20 
> tipAmount(40, 'fair') 
6 */

// tip calculator exercise 1;

function tipAmount(number, level){
    
    if (level == "good"){
    tipCalc = number * 0.20;
    return tipCalc;}
    else if (level == "fair"){
        tipCalc = number * 0.15;
        return tipCalc;}
    else if (level == "bad" ) {
        tipCalc = number * 0.10;
        return tipCalc ;
    }
}
console.log(tipAmount(100,"good"));
console.log(tipAmount(40,"fair"));

/*Tip Calculator 2

Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

> totalAmount(100, 'good') 
120 
> totalAmount(40, 'fair') 
46*/

//total calculator exercise 2; 

function totalAmount(number, level){
    var tip = tipAmount(number, level);
    var total = number + tip;
    return total;
}

console.log(totalAmount(100, "good"));
console.log(totalAmount(40, "fair"));