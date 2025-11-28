/*
26. Add Last 3 Characters to Front and Back of String
Write a JavaScript program to create a string from a given string. 
This is done by taking the last 3 characters and adding them at both the front and back. 
The string length must be 3 or more. 
 */

function addLast3Characters(string){
    if(string.length < 3) return "String lenght must be 3 or greater";
    const threeLastCharacters = string.substring(string.length - 3);
    return threeLastCharacters + string + threeLastCharacters;
}

console.log(addLast3Characters(""));