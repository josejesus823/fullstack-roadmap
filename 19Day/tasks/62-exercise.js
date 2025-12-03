/*
62. Move Last 3 Characters to Start of String
Write a JavaScript program to move the last three characters to the start of a given string. 
The string length must be greater than or equal to three
 */

function moveLast3Characters(string){
    if(string.length < 3) return "The string must be greather than or equal to three";
    const last3Chars = string.substring(string.length - 3);
    return last3Chars + string.substring(0,string.length - 3);
}

console.log(moveLast3Characters("Python"));
console.log(moveLast3Characters("JavaScript"));
console.log(moveLast3Characters("Hi")); 