
 /*
    Bonus: Caesar Cipher
Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

> cipher('Genius without education is like silver in the mine')
'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'
*/

function cypher(text){
    var str="";
    for(var i=0;i<text.length;i++){
    var asciiNum = text[i].charCodeAt();
        if (asciiNum >=65 && asciiNum< 78){
        str += String.fromCharCode(asciiNum + 13);
  }
        else if(asciiNum >=78 && asciiNum <=90){
        str += String.fromCharCode(asciiNum -13);
  }
        else if(asciiNum >=97 && asciiNum <110){
        str += String.fromCharCode(asciiNum + 13);
  }
        else if(asciiNum >= 110 && asciiNum <=122){
        str += String.fromCharCode(asciiNum -13);
  }
        else {
         str += text[i];
  }
}
    return str;
}
cypher("Genius without an education is like a silver in the mine")
        