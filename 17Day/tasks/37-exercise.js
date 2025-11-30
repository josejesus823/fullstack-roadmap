/*
37. Modify String Based on Length (First 3 Lowercase/Uppercase)
Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. 
If the string length is less than 3 convert all the characters to upper case.  
 */


function first3LowerUpper(string){
    const newString = string.slice(0,3).toLowerCase();
    if(string.length < 3) return string.toUpperCase();
    return newString + string.substring(3);
    
}
console.log(first3LowerUpper("Python"));
console.log(first3LowerUpper("Py"));
console.log(first3LowerUpper("JAVAScript"));