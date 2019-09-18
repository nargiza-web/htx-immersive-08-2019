/*
Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

Example:

> madlib('Anushka', 'art'); 
'Anushka's favorite subject in school is art.'
*/
//we are not using user input
function madlib(name,subject){  
return (`${name}'s favourite subject is ${subject}`)
}
madlib("anusha", "math")
console.log(madlib("anusha", "math"))
